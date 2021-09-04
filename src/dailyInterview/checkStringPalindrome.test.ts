import { checkStringPalindrome } from './checkStringPalindrome';

describe('checkStringPalindrome function', () => {
  it('should work', () => {
    expect(checkStringPalindrome('momom')).toBe('momom');
    expect(checkStringPalindrome('geeksogeeks')).toBe('geeksoskeeg');
  });
});
