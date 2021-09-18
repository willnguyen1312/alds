import { columnOrderInGrid } from './columnOrderInGrid';

describe('columnOrderInGrid function', () => {
  it('should work', () => {
    const grid = [
      ['c', 'b', 'a'],
      ['d', 'a', 'f'],
      ['g', 'h', 'i'],
    ];

    const actual = columnOrderInGrid(grid);
    expect(actual).toBe(1);
  });
});
