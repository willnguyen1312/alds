import { rotateMatrix } from './rotateMatrix';

describe('rotateMatrix function', () => {
  it('should work', () => {
    const actual = rotateMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
    expect(actual).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });
});
