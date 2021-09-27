import { minSubArr } from './minSubArr';

describe('minSubArr function', () => {
  it('should work', () => {
    const actual = minSubArr([34, -50, 42, 14, -5, 86]);
    expect(actual).toBe(-50);
  });
});
