import { balancedBrackets } from './balancedBrackets';

describe('balancedBrackets function', () => {
  it('should work', () => {
    const actual1 = balancedBrackets('([])[]({})');
    expect(actual1).toBe(true);
    const actual2 = balancedBrackets('([)]');
    expect(actual2).toBe(false);
  });
});
