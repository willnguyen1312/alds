/*
This question is asked by Amazon. Given a 2D board that represents a word search puzzle
and a string word, return whether or the given word can be formed in the puzzle
by only connecting cells horizontally and vertically.

Ex: Given the following board and words…

board =
[
  ['C','A','T','F'],
  ['B','G','E','S'],
  ['I','T','A','E']
]
word = "CAT", return true
word = "TEA", return true
word = "SEAT", return true
word = "BAT", return false
*/

function findMatch(
  mat: string[][],
  pat: string,
  x: number,
  y: number,
  row: number,
  column: number,
  level: number,
): boolean {
  const length = pat.length

  if (level === length) return true

  if (x < 0 || y < 0 || x >= row || y >= column) return false

  if (mat[x][y] === pat[level]) {
    const original = mat[x][y]
    mat[x][y] = "*"

    const res =
      findMatch(mat, pat, x - 1, y, row, column, level + 1) ||
      findMatch(mat, pat, x + 1, y, row, column, level + 1) ||
      findMatch(mat, pat, x, y - 1, row, column, level + 1) ||
      findMatch(mat, pat, x, y + 1, row, column, level + 1)

    mat[x][y] = original
    return res
  }

  return false
}

export function wordSearchInGrid(
  grid: string[][],
  word: string,
  row = grid.length,
  column = grid[0].length,
) {
  const length = word.length

  if (length > row * column) return false

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === word[0])
        if (findMatch(grid, word, i, j, row, column, 0)) {
          return true
        }
    }
  }
  return false
}
