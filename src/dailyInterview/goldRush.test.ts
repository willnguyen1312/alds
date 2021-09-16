import { goldRush } from './goldRush';

describe('goldRush function', () => {
  it('should work', () => {
    const grid = [
      [0, 2, 0],
      [8, 6, 3],
      [0, 9, 0],
    ];
    const actual = goldRush(grid);
    expect(actual).toBe(23);
  });
});
