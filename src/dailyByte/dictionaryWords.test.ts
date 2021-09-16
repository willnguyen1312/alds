import { dictionaryWords } from './dictionaryWords';

describe('dictionaryWords function', () => {
  it('should work', () => {
    const actual = dictionaryWords('thedailybyte', ['the', 'daily', 'byte']);
    expect(actual).toBe(true);
  });
});
