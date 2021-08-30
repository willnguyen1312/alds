import { maximumProfitFromStocks } from './maximumProfitFromStocks';

describe('maximumProfitFromStocks function', () => {
  it('should work', () => {
    expect(maximumProfitFromStocks([9, 11, 8, 5, 7, 10])).toBe(5);
    expect(maximumProfitFromStocks([7, 1, 5, 3, 6, 4])).toEqual(5);
    expect(maximumProfitFromStocks([7, 6, 4, 3, 1])).toEqual(0);
    expect(maximumProfitFromStocks([4])).toEqual(0);
  });
});
