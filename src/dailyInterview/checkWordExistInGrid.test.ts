import { checkWordExistInGrid } from './checkWordExistInGrid';

describe('checkWordExistInGrid function', () => {
  it('should work', () => {
    const grid = [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ];

    const actual = checkWordExistInGrid(grid, 'ABCCED');
    expect(actual).toBe(true);
  });
});
