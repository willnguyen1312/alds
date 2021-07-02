import { findKthLargest } from './findKLargest';

describe('findKLargest', () => {
  it('should work for the first case', () => {
    expect(findKthLargest([1, 4, 3, 2, 5, 6, 7], 2)).toBe(6);
  });
});
