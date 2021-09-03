import { shiftedString } from './shiftedString';

describe('shiftedString', () => {
  it('should work', () => {
    expect(shiftedString('abcde', 'cdeab')).toBe(true);
    expect(shiftedString('abc', 'acb')).toBe(false);
  });
});
