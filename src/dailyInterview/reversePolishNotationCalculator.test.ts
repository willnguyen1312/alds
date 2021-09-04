import { reversePolishNotationCalculator } from './reversePolishNotationCalculator';

describe('reversePolishNotationCalculator function', () => {
  it('should work', () => {
    expect(reversePolishNotationCalculator([1, 2, 3, '+', 2, '*', '-'])).toBe(
      -9
    );
  });
});
