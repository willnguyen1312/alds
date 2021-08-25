import { minimumSizeSubarraySum } from './minimumSizeSubarraySum';

describe('minimumSizeSubarraySum function', () => {
  it('should work', () => {
    expect(minimumSizeSubarraySum([2, 3, 1, 2, 4, 3], 7)).toBe(2);
  });
});
