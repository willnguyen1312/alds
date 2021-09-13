import { maxSumContinuousSubArr } from './maxSumContinuousSubArr';

describe('maxSumContinuousSubArr function', () => {
  it('should work', () => {
    const actual = maxSumContinuousSubArr([34, -50, 42, 14, -5, 86]);
    expect(actual).toBe(137);
  });
});
