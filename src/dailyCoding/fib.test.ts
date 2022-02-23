import { fib } from './fib';

describe('fib function', () => {
  it('should work', () => {
    expect(fib(3)).toBe(2);
    expect(fib(7)).toBe(13);
    expect(fib(9)).toBe(34);
  });
});
