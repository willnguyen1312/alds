import { substringContains } from './substringContains';

describe('substringContains function', () => {
  it('should work', () => {
    const actual = substringContains('figehaeci', ['a', 'e', 'i']);
    expect(actual).toBe('aeci');
  });
});
