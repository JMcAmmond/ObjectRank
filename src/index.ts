import { ComparisionOperator } from './enums/ComparisonOperator';
import { IRuleSetItems, IArrayRankOptions, IRank } from './interfaces/RankRules';
import { objectByString } from './helpers/objectHelpers';
import { comparison } from './helpers/comparisonHelpers';

const sortOptions = (arr: Array<IRank>, options: IArrayRankOptions) => {
  if (options.autoSort) {
    return arr.sort((a, b) => b.matches - a.matches);
  }

  return arr;
};

const stripRank = (arr: Array<IRank>, options: IArrayRankOptions) => {
  if (!options.withRank) {
    return arr.map((item) => item.data);
  }

  return arr;
};

const defaultOptions = {
  withRank: false,
  autoSort: true,
};

const ArrayRank = (arr: Array<Object>, ruleSet: Array<IRuleSetItems>, opt?: IArrayRankOptions): Array<any | IRank> => {
  const options = { ...defaultOptions, ...opt };
  const rankedResults: Array<IRank> = [];
  let toReturn;

  arr.forEach((item) => {
    const itemRank: IRank = { data: item, matches: 0 };

    ruleSet.forEach((rule) => {
      const objectValue = objectByString(item, rule.key);
      const compare = comparison[rule.operator || ComparisionOperator.Equal];
      if (compare(objectValue, rule.value)) {
        itemRank.matches += 1;
      }
    });

    rankedResults.push(itemRank);
  });

  toReturn = sortOptions(rankedResults, options);
  toReturn = stripRank(toReturn, options);

  return toReturn;
};

export default ArrayRank;
