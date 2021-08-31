import { productExceptSelf } from './productExceptSelf';

describe('productExceptSelf function', () => {
  it('should work', () => {
    expect(productExceptSelf([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  });
});
