import { ComparisionOperator } from '../enums/ComparisonOperator';

export const comparison = {
  [ComparisionOperator.Equal]: (x: any, y: any) => x === y,
  [ComparisionOperator.NotEqual]: (x: any, y: any) => x !== y,
  [ComparisionOperator.GreaterThan]: (x: any, y: any) => x > y,
  [ComparisionOperator.LessThan]: (x: any, y: any) => x < y,
  [ComparisionOperator.GreaterThanOrEqual]: (x: any, y: any) => x >= y,
  [ComparisionOperator.LessThanOrEqual]: (x: any, y: any) => x <= y,
};
