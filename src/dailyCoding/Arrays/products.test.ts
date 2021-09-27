import { products } from './products';

describe('products function', () => {
  it('should work', () => {
    const actual = products([1, 2, 3, 4, 5]);
    expect(actual).toEqual([120, 60, 40, 30, 24]);
  });
});
