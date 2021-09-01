import { wordOrdering } from './wordOrdering';

describe('wordOrdering function', () => {
  it('should work', () => {
    expect(wordOrdering(['abcd', 'efgh'], 'zyxwvutsrqponmlkjihgfedcba')).toBe(
      false
    );
    expect(
      wordOrdering(['zyx', 'zyxw', 'zyxwy'], 'zyxwvutsrqponmlkjihgfedcba')
    ).toBe(true);
  });
});
