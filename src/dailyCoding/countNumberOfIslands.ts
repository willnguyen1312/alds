export function countNumberOfIslands(grid: number[][]): number {
  let result = 0
  if (grid.length === 0) return result

  const rowsCount = grid.length
  const columnsCount = grid[0].length
  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      if (grid[i][j] == 1) {
        result++
        travelIsland(grid, i, j, rowsCount, columnsCount)
      }
    }
  }

  return result
}

function travelIsland(
  grid: any,
  i: number,
  j: number,
  rowsCount: number,
  columnsCount: number,
) {
  if (i < 0 || j < 0 || i >= rowsCount || j >= columnsCount || grid[i][j] === 0)
    return

  grid[i][j] = 0

  travelIsland(grid, i - 1, j, rowsCount, columnsCount)
  travelIsland(grid, i + 1, j, rowsCount, columnsCount)
  travelIsland(grid, i, j - 1, rowsCount, columnsCount)
  travelIsland(grid, i, j + 1, rowsCount, columnsCount)
}
