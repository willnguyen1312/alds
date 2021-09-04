import { fixBrackets } from './fixBrackets';

describe('fixBrackets function', () => {
  it('should work', () => {
    expect(fixBrackets('(()()')).toBe(1);
    expect(fixBrackets('(()()(')).toBe(2);
    expect(fixBrackets(')()()')).toBe(1);
    expect(fixBrackets('))()()')).toBe(2);
  });
});
