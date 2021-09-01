/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

Given a 2-dimensional grid consisting of 1's (land blocks) and 0's (water blocks),
count the number of islands present in the grid. The definition of an island is as follows:
1.) Must be surrounded by water blocks.
2.) Consists of land blocks (1's) connected to adjacent land blocks (either vertically or horizontally). 
Assume all edges outside of the grid are water.
*/

export function numberOfIslands(grid: number[][]): number {
  if (grid.length === 0) return 0;

  let countIslands = 0;
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;

  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      if (grid[i][j] === 1) {
        countIslands++;
        markDownIsland(grid, i, j, rowsCount, columnsCount);
      }
    }
  }

  return countIslands;
}

function markDownIsland(
  grid: number[][],
  i: number,
  j: number,
  rowsCount: number,
  columnsCount: number
) {
  if (i < 0 || j < 0 || i >= rowsCount || j >= columnsCount || grid[i][j] === 0)
    return;

  grid[i][j] = 0;

  markDownIsland(grid, i - 1, j, rowsCount, columnsCount);
  markDownIsland(grid, i + 1, j, rowsCount, columnsCount);
  markDownIsland(grid, i, j - 1, rowsCount, columnsCount);
  markDownIsland(grid, i, j + 1, rowsCount, columnsCount);
}
