/*
This problem was asked by Coursera.

Given a 2D board of characters and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell,
where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once.

For example, given the following board:

[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

exists(board, "ABCCED") returns true,
exists(board, "SEE") returns true,
exists(board, "ABCB") returns false.
*/

const directions = [
  { x: 1, y: 0 },
  { x: -1, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: -1 },
];

export function checkWordExistInGrid(grid: string[][], word: string): boolean {
  const rowCount = grid.length;
  const colCount = grid[0].length;

  function checkWordExistInGridHelper(
    row: number,
    column: number,
    currentWord: string
  ): boolean {
    if (
      row < 0 ||
      column < 0 ||
      row >= rowCount ||
      column >= colCount ||
      grid[row][column] === '*'
    ) {
      return false;
    }

    const updatedWord = currentWord + grid[row][column];

    if (updatedWord === word) {
      return true;
    }

    for (const direction of directions) {
      const original = grid[row][column];
      grid[row][column] = '*';

      if (
        checkWordExistInGridHelper(
          row + direction.x,
          column + direction.y,
          updatedWord
        )
      ) {
        return true;
      }

      grid[row][column] = original;
    }

    return false;
  }

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < colCount; j++) {
      if (checkWordExistInGridHelper(i, j, '')) {
        return true;
      }
    }
  }

  return false;
}
