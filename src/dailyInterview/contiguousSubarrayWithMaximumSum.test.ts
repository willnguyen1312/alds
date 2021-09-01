import {
  contiguousSubarrayWithMaximumSum,
  maxSubArraySum,
} from './contiguousSubarrayWithMaximumSum';

describe('contiguousSubarrayWithMaximumSum function', () => {
  it('should work', () => {
    expect(contiguousSubarrayWithMaximumSum([34, -50, 42, 14, -5, 86])).toBe(
      137
    );
    expect(maxSubArraySum([34, -50, 42, 14, -5, 86])).toEqual([137, 2, 5]);
  });
});
