export function minPathSum(grid: number[][]): number {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (i == 0 && j == 0) continue

      const up = i - 1 >= 0 ? grid[i - 1][j] : Infinity
      const left = j - 1 >= 0 ? grid[i][j - 1] : Infinity
      grid[i][j] = Math.min(grid[i][j] + up, grid[i][j] + left)
    }
  }
  return grid[grid.length - 1][grid[0].length - 1]
}
