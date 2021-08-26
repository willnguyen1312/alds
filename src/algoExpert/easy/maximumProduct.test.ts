import { maximumProduct, maximumProduct2 } from './maximumProduct';

describe('maximumProduct function', () => {
  it('should work', () => {
    expect(maximumProduct([-4, -4, 2, 8])).toBe(128);
    expect(maximumProduct2([-4, -4, 2, 8])).toBe(128);
  });
});
