import { validateBalancedParentheses } from './validateBalancedParentheses';

describe('validateBalancedParentheses function', () => {
  it('should work as expected', () => {
    expect(validateBalancedParentheses('((()))')).toBe(true);

    expect(validateBalancedParentheses('({[)]')).toBe(false);
  });
});
