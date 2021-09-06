import { decimalToRoman } from './decimalToRoman';

describe('decimalToRoman function', () => {
  it('should work', () => {
    const actual = decimalToRoman(900);
    expect(actual).toBe('CM');
  });
});
