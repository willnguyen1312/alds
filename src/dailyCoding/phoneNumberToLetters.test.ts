import { phoneNumberToLetters } from './phoneNumberToLetters';

describe('phoneNumberToLetters function', () => {
  it('should work', () => {
    const actual = phoneNumberToLetters('23');
    expect(actual).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ]);
  });
});
