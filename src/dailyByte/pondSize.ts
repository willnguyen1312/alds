/*
You are given two-dimensional matrix that represents a plot of land.
Within the matrix there exist two values: ones which represent land
and zeroes which represent water within a pond. Given that parts
of a pond can be connected both horizontally and vertically (but not diagonally),
return the largest pond size. 

Note: You may assume that each zero within a given pond contributes
a value of one to the total size of the pond. 

Ex: Given the following plot of land…

land = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
], return 1.
Ex: Given the following plot of land…

land = [
    [1,0,1],
    [0,0,0],
    [1,0,1]
], return 5.
*/

export function pondSize(grid: number[][]): number {
  let result = 0
  if (grid.length === 0) return result

  const rowsCount = grid.length
  const columnsCount = grid[0].length
  for (let i = 0; i < rowsCount; i++) {
    for (let j = 0; j < columnsCount; j++) {
      if (grid[i][j] === 1) {
        result++
        travelIsland(grid, i, j, rowsCount, columnsCount)
      }
    }
  }

  return result
}

const directions = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
]

function travelIsland(
  grid: any,
  i: number,
  j: number,
  rowsCount: number,
  columnsCount: number,
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

  grid[i][j] = 0

  for (const direction of directions) {
    travelIsland(
      grid,
      i + direction.x,
      j + direction.y,
      rowsCount,
      columnsCount,
    )
  }
}
