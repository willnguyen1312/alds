import { simplePermutation } from './simplePermutation';

describe('simplePermutation function', () => {
  it('should work', () => {
    const actual = simplePermutation([1, 2, 3]);
    expect(actual).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ]);
  });
});
