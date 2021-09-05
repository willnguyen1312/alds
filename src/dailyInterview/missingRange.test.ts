import { missingRange } from './missingRange';

// print(missing_ranges([1, 3, 5, 10], 1, 10))
// # [(2, 2), (4, 4), (6, 9)]
// */

describe('missingRange function', () => {
  it('should work', () => {
    const actual1 = missingRange([1, 3, 5, 10]);
    expect(actual1).toEqual([
      [2, 2],
      [4, 4],
      [6, 9],
    ]);

    const actual2 = missingRange([1, 2, 3, 5, 10]);
    expect(actual2).toEqual([
      [4, 4],
      [6, 9],
    ]);
  });
});
