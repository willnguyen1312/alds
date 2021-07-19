import { validateSubsequence } from './validateSubsequence';

describe('validateSubsequence', () => {
  it('should work for the first case', () => {
    expect(validateSubsequence([1, 2, 3, 4, 5, 6], [1, 3, 5, 6])).toBe(true);
  });
});
