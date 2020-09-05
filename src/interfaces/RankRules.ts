import { ComparisionOperator } from '../enums/ComparisonOperator';

export interface IRuleSetItems {
  key: string;
  value: any;
  operator?: ComparisionOperator;
}

export interface IRank {
  data: any;
  matches: number;
}

export interface IArrayRankOptions {
  withRank?: boolean;
  autoSort?: boolean;
}
