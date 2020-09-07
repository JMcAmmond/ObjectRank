import { ComparisionOperator } from '../../enums/ComparisonOperator';
import { comparison } from '../comparisonHelpers';

describe('Comparision', () => {
  it('should be valid comparisions', () => {
    expect(comparison[ComparisionOperator.Equal](1, 1)).toBeTruthy();
    expect(comparison[ComparisionOperator.NotEqual](1, 2)).toBeTruthy();
    expect(comparison[ComparisionOperator.GreaterThan](2, 1)).toBeTruthy();
    expect(comparison[ComparisionOperator.LessThan](1, 2)).toBeTruthy();
    expect(comparison[ComparisionOperator.GreaterThanOrEqual](2, 1)).toBeTruthy();
    expect(comparison[ComparisionOperator.GreaterThanOrEqual](2, 2)).toBeTruthy();
    expect(comparison[ComparisionOperator.LessThanOrEqual](1, 2)).toBeTruthy();
    expect(comparison[ComparisionOperator.LessThanOrEqual](2, 2)).toBeTruthy();
  });

  it('should be invalid comparisions', () => {
    expect(comparison[ComparisionOperator.Equal]('equal', 'not equal')).toBeFalsy();
    expect(comparison[ComparisionOperator.NotEqual]('equal', 'equal')).toBeFalsy();
    expect(comparison[ComparisionOperator.GreaterThan](4, 100)).toBeFalsy();
    expect(comparison[ComparisionOperator.LessThan](6, 1)).toBeFalsy();
    expect(comparison[ComparisionOperator.GreaterThanOrEqual](1, 34)).toBeFalsy();
    expect(comparison[ComparisionOperator.LessThanOrEqual](100, 1)).toBeFalsy();
  });
});
