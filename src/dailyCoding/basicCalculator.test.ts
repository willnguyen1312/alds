import { calculate } from './basicCalculator';

describe('calculate function', () => {
  it('should work', () => {
    expect(calculate('(1 + 1) * 2')).toBe(4);
  });
});
