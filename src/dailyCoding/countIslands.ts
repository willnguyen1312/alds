/*
This problem was asked by Amazon.

Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.

For example, this matrix has 4 islands.

1 0 0 0 0
0 0 1 1 0
0 1 1 0 0
0 0 0 0 0
1 1 0 0 1
1 1 0 0 1
*/

export function countIslands(grid: number[][]): number {
  let result = 0;
  if (grid.length === 0) return result;

  const rowsCount = grid.length;
  const columnsCount = grid[0].length;
  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      if (grid[i][j]) {
        result++;
        travelIsland(grid, i, j, rowsCount, columnsCount);
      }
    }
  }

  return result;
}

const directions = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
];

function travelIsland(
  grid: any,
  i: number,
  j: number,
  rowsCount: number,
  columnsCount: number
) {
  if (
    i < 0 ||
    j < 0 ||
    i >= rowsCount ||
    j >= columnsCount ||
    grid[i][j] === 0
  ) {
    return;
  }

  grid[i][j] = 0;

  for (const direction of directions) {
    travelIsland(
      grid,
      i + direction.x,
      j + direction.y,
      rowsCount,
      columnsCount
    );
  }
}
