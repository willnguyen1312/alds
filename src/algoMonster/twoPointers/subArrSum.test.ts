import { subArrSum, subarraySumTotal } from './subArrSum';

describe('subArrSum function', () => {
  it('should work', () => {
    expect(subArrSum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)).toEqual([1, 5]);

    expect(subarraySumTotal([1, 2, 3, 2, 1], 6)).toBe(2);
  });
});
