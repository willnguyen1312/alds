import { longestSubstringWithoutRepeatingCharacters } from './longestSubstringWithoutRepeatingCharacters';

describe('longestSubstringWithoutRepeatingCharacters function', () => {
  it('should work', () => {
    expect(longestSubstringWithoutRepeatingCharacters('abccabcabcc')).toEqual(
      3
    );
  });
});
