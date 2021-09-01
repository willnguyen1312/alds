import { longestIncreasingSequence } from './longestIncreasingSequence';

describe('longestIncreasingSequence function', () => {
  it('should work', () => {
    expect(
      longestIncreasingSequence([
        0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15,
      ])
    ).toBe(6);
  });
});
