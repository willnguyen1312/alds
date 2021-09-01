import { nthFibonacciNumber } from './nthFibonacciNumber';

describe('nthFibonacciNumber function', () => {
  it('should work', () => {
    expect(nthFibonacciNumber(3)).toBe(2);
    expect(nthFibonacciNumber(7)).toBe(13);
    expect(nthFibonacciNumber(9)).toBe(34);
  });
});
