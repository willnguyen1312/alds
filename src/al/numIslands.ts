let numIslands = function (grid: any) {
  if (grid.length === 0) return 0;

  let countIslands = 0;
  const rowsCount = grid.length;
  const columnsCount = grid[0].length;
  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      if (grid[i][j] == 1) {
        countIslands++;
        colorIsland(grid, i, j, rowsCount, columnsCount);
      }
    }
  }

  return countIslands;
};

let colorIsland = function (grid: any, i: number, j: number, rowsCount: number, columnsCount: number) {
  if (i < 0 || j < 0 || i >= rowsCount || j >= columnsCount || grid[i][j] == 0) return;

  grid[i][j] = 0;

  colorIsland(grid, i - 1, j, rowsCount, columnsCount);
  colorIsland(grid, i + 1, j, rowsCount, columnsCount);
  colorIsland(grid, i, j - 1, rowsCount, columnsCount);
  colorIsland(grid, i, j + 1, rowsCount, columnsCount);
};
