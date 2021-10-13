import { sumPrimes } from './sumPrimes';

describe('sumPrimes function', () => {
  it('should work', () => {
    const actual = sumPrimes(4);
    expect(actual).toEqual([2, 2]);
  });
});
