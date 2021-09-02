import { romanNumber } from './romanNumber';

describe('romanNumber function', () => {
  it('should work', () => {
    expect(romanNumber('IX')).toBe(9);
    expect(romanNumber('VII')).toBe(7);
    expect(romanNumber('MCMIV')).toBe(1904);
  });
});
