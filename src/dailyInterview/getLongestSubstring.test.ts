import { getLongestSubstring } from './getLongestSubstring';

describe('longestSubstring function', () => {
  it('work as expected', () => {
    const input = 'abrkaabcdefghijjxxx';
    const actual = getLongestSubstring(input);
    const expected = 10;

    expect(actual).toBe(expected);
  });
});
