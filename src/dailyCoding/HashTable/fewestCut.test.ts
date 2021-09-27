import { fewestCut } from './fewestCut';

describe('fewestCut function', () => {
  it('should work', () => {
    const actual = fewestCut([
      [3, 5, 1, 1],
      [2, 3, 3, 2],
      [5, 5],
      [4, 4, 2],
      [1, 3, 3, 3],
      [1, 1, 6, 1, 1],
    ]);

    expect(actual).toBe(2);
  });
});
