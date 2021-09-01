import { longestSubstringWithDistinctCharacters } from './longestSubstringWithDistinctCharacters';

describe('longestSubstringWithDistinctCharacters function', () => {
  it('should work', () => {
    expect(longestSubstringWithDistinctCharacters('aabcdefff', 3)).toBe(
      'defff'
    );
  });
});
