/*
Hi, here's your problem today. This problem was recently asked by Uber:

Find the maximum number of connected colors in a grid.
*/

export function connectedColors(grid: number[][]): number {
  if (grid.length === 0) return 0

  let result = 0
  const rowsCount = grid.length
  const columnsCount = grid[0].length
  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      if (grid[i][j] === 1) {
        const count = { value: 0 }
        traverseGrid(grid, i, j, rowsCount, columnsCount, count)
        result = Math.max(count.value, result)
      }
    }
  }

  return result
}

function traverseGrid(
  grid: number[][],
  i: number,
  j: number,
  rowsCount: number,
  columnsCount: number,
  count: { value: number },
) {
  if (
    i < 0 ||
    j < 0 ||
    i >= rowsCount ||
    j >= columnsCount ||
    grid[i][j] === 0
  ) {
    return
  }

  count.value += 1
  grid[i][j] = 0

  traverseGrid(grid, i - 1, j, rowsCount, columnsCount, count)
  traverseGrid(grid, i + 1, j, rowsCount, columnsCount, count)
  traverseGrid(grid, i, j - 1, rowsCount, columnsCount, count)
  traverseGrid(grid, i, j + 1, rowsCount, columnsCount, count)
}
