import { getLongestPalindromicSubstring } from './getLongestPalindromicSubstring';

describe('longestSubstring function', () => {
  it('work as expected', () => {
    const input = 'tracecars';
    const actual = getLongestPalindromicSubstring(input);
    const expected = 'racecar';

    expect(actual).toBe(expected);
  });
});
