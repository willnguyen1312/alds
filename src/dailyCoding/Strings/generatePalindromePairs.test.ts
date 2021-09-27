import { generatePalindromePairs } from './generatePalindromePairs';

describe('generatePalindromePairs function', () => {
  it('should work', () => {
    const actual = generatePalindromePairs(['code', 'edoc', 'da', 'd']);
    expect(actual).toEqual([
      [0, 1],
      [1, 0],
      [2, 3],
    ]);
  });
});
