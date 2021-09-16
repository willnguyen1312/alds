import { longestCommonSubsequence } from './longestCommonSubsequence';

describe('longestCommonSubsequence function', () => {
  it('should work', () => {
    const actual = longestCommonSubsequence('abca', 'acea');
    expect(actual).toBe(3);
  });
});
