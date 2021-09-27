import { maxSubArr } from './maxSubArr';

describe('maxSubArr function', () => {
  it('should work', () => {
    const actual = maxSubArr([34, -50, 42, 14, -5, 86]);
    expect(actual).toBe(137);
  });
});
