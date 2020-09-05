import ArrayRank from '../index';

describe('ArrayRank', () => {
  it('should return sorted array', () => {
    const first = { position: 1, title: 'first' };
    const second = { position: 2, title: 'second' };
    const third = { position: 3, title: 'third' };

    const arr = [first, second, third];

    const ruleSet = [
      { key: 'position', value: 2 },
      { key: 'title', value: 'second' },
    ];
    const options = { autoSort: false };
    const result = ArrayRank(arr, ruleSet, options);
    expect(JSON.stringify(result)).toBe(JSON.stringify(arr));
  });

  it('should NOT return sorted array', () => {
    const first = { position: 1, title: 'first' };
    const second = { position: 2, title: 'second' };
    const third = { position: 3, title: 'third' };

    const expected = [second, first, third];
    const arr = [first, second, third];

    const ruleSet = [
      { key: 'position', value: 2 },
      { key: 'title', value: 'second' },
    ];
    const result = ArrayRank(arr, ruleSet);
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  it('should return arr with matches', () => {
    const first = { position: 1, title: 'first' };
    const second = { position: 2, title: 'second' };
    const third = { position: 3, title: 'third' };

    const arr = [first, second, third];

    const ruleSet = [
      { key: 'position', value: 2 },
      { key: 'title', value: 'second' },
    ];
    const options = { withRank: true };
    const result = ArrayRank(arr, ruleSet, options);
    expect(result[0].matches).toBe(2);
  });
});
