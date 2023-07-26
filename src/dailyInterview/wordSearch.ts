/*
Hi, here's your problem today. This problem was recently asked by Amazon:

You are given a 2D array of characters, and a target string. Return whether or not the word target word exists in the matrix.
Unlike a standard word search, the word must be either going left-to-right, or top-to-bottom in the matrix.

Example:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]

Given this matrix, and the target word FOAM, you should return true, as it can be found going up-to-down in the first column.
*/

let numberOfRows = 0
let numberOfColumns = 0

// For searching in all 8 directions
// let x = [-1, -1, -1, 0, 0, 1, 1, 1];
// let y = [-1, 0, 1, -1, 1, -1, 0, 1];

// For searching in all 2 directions as per description
let x = [0, 1]
let y = [1, 0]

function search2D(grid: string[][], row: number, col: number, word: string) {
  if (grid[row][col] !== word[0]) return false

  let length = word.length

  // Search word starting from (row, col)
  for (let direction = 0; direction < x.length; direction++) {
    // Initialize starting point for current direction
    let k = -1
    let rowDirection = row + x[direction]
    let columnDirection = col + y[direction]

    // First character is already checked,
    // match remaining characters
    for (k = 1; k < length; k++) {
      // If out of bound break
      if (
        rowDirection >= numberOfRows ||
        rowDirection < 0 ||
        columnDirection >= numberOfColumns ||
        columnDirection < 0
      )
        break

      // If not matched, break
      if (grid[rowDirection][columnDirection] !== word[k]) break

      // Moving in particular direction
      rowDirection += x[direction]
      columnDirection += y[direction]
    }

    // If all character matched, then value must, be equal to length of word
    if (k === length) return true
  }

  return false
}

export function wordSearch(grid: string[][], word: string) {
  numberOfRows = grid.length
  numberOfColumns = grid[0].length

  for (let row = 0; row < numberOfRows; row++) {
    for (let col = 0; col < numberOfColumns; col++) {
      if (search2D(grid, row, col, word)) return true
    }
  }

  return false
}
