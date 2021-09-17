import { longestIncreasingSubsequence } from './longestIncreasingSubsequence';

describe('longestIncreasingSubsequence function', () => {
  it('should work', () => {
    const actual = longestIncreasingSubsequence([
      0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15,
    ]);
    expect(actual).toBe(6);
  });
});
