import { wordSearchInGrid } from './wordSearchInGrid';

describe('wordSearchInGrid function', () => {
  it('should work', () => {
    const grid = [
      ['C', 'A', 'T', 'F'],
      ['B', 'G', 'E', 'S'],
      ['I', 'T', 'A', 'E'],
    ];

    const actual = wordSearchInGrid(grid, 'CAT');
    expect(actual).toBe(true);
  });
});
