import { wordBreak } from './wordBreak';

describe('wordBreak function', () => {
  it('should work', () => {
    expect(wordBreak('algomonster', ['algo', 'monster'])).toEqual(true);
  });
});
