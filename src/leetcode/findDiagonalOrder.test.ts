// Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.
function findDiagonalOrder(mat: number[][]): number[] {
  const output: number[] = []
  const m = mat.length
  const n = mat[0].length
  let row = 0
  let col = 0
  let direction = 1
  while (row < m && col < n) {
    output.push(mat[row][col])
    const newRow = row + (direction === 1 ? -1 : 1)
    const newCol = col + (direction === 1 ? 1 : -1)
    if (newRow < 0 || newRow === m || newCol < 0 || newCol === n) {
      if (direction === 1) {
        row += col === n - 1 ? 1 : 0
        col += col < n - 1 ? 1 : 0
      } else {
        col += row === m - 1 ? 1 : 0
        row += row < m - 1 ? 1 : 0
      }
      direction = -direction
    } else {
      row = newRow
      col = newCol
    }
  }
  return output
}

describe("Diagonal Traverse", () => {
  test("should work", () => {
    const mat = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]
    const output = [1, 2, 4, 7, 5, 3, 6, 8, 9]
    expect(findDiagonalOrder(mat)).toEqual(output)
  })
})
