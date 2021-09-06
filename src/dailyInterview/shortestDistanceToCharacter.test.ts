import { shortestDistanceToCharacter } from './shortestDistanceToCharacter';

describe('shortestDistanceToCharacter function', () => {
  it('should work', () => {
    const actual = shortestDistanceToCharacter('helloworld', 'l');
    expect(actual).toEqual([2, 1, 0, 0, 1, 2, 2, 1, 0, 1]);
  });
});
