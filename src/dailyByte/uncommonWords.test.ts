import { uncommonWords } from './uncommonWords';

describe('uncommonWords function', () => {
  it('should work', () => {
    const actual = uncommonWords('the quick', 'brown fox');
    expect(actual).toEqual(['the', 'quick', 'brown', 'fox']);
  });
});
