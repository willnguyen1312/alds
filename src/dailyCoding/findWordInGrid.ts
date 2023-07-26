/*
This problem was asked by Microsoft.

Given a 2D matrix of characters and a target word, write a function that
returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

For example, given the following matrix:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
 
and the target word 'FOAM', you should return true, since it's the leftmost column.
Similarly, given the target word 'MASS', you should return true, since it's the last row.
*/

export function findWordInGrid(grid: string[][], target: string): boolean {
  const maxRow = grid.length
  const maxColumn = grid[0].length

  function checkValid(row: number, column: number) {
    let result = ""
    for (let i = row; i < maxRow; i++) {
      result += grid[i][column]
      if (result === target) {
        return true
      }
    }

    result = ""

    for (let i = column; i < maxColumn; i++) {
      result += grid[row][i]
      if (result === target) {
        return true
      }
    }

    return false
  }

  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      if (checkValid(i, j)) {
        return true
      }
    }
  }

  return false
}
