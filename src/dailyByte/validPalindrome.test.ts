import { validPalindrome, validPalindromeRecur } from './validPalindrome';

describe('validPalindrome function', () => {
  it('should work', () => {
    expect(validPalindrome('level')).toBe(true);
    expect(validPalindrome('algorithm')).toBe(false);
    expect(validPalindromeRecur('level')).toBe(true);
    expect(validPalindromeRecur('algorithm')).toBe(false);
  });
});
