import { objectByString } from './../objectHelpers';

describe('objectByString', () => {
  it('should return value from object', () => {
    const expected = 'the expected value';
    expect(objectByString({ test: expected }, 'test')).toBe(expected);
    expect(objectByString({ test: { nested: expected } }, 'test.nested')).toBe(expected);
  });

  it('should return null if object path cannot be found', () => {
    const expected = 'the expected value';
    expect(objectByString({ test: expected }, 'badPath')).toBeNull();
  });
});
