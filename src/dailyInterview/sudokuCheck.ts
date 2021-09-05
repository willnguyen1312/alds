/*
Hi, here's your problem today. This problem was recently asked by Facebook:

A Sudoku board is a 9x9 grid, where each row, column and each 3x3 subbox contains the number from 1-9.
Here's an example of a Sudoku board.
-------------
|534|678|912|
|672|195|348|
|198|342|567|
|------------
|859|761|423|
|426|853|791|
|713|924|856|
|------------
|961|537|284|
|287|419|635|
|345|286|179|
|------------

Given a 9x9 board, determine if it is a valid Sudoku board.
The board may be partially filled, where an empty cell will be represented by the space character ' '.

*/

type SudokuCellType = number | string;

export function sudokuCheck(board: SudokuCellType[][]) {
  const rows: SudokuCellType[][] = [];
  const columns: SudokuCellType[][] = [];
  const boxes: SudokuCellType[][] = [];

  for (let i = 0; i < 9; i++) {
    rows.push([]);
    columns.push([]);
    boxes.push([]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let cell = board[i][j];

      if (cell !== ' ') {
        if (rows[i].includes(cell)) {
          return false;
        } else rows[i].push(cell);

        if (columns[j].includes(cell)) {
          return false;
        } else columns[j].push(cell);

        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (boxes[boxIndex].includes(cell)) {
          return false;
        } else boxes[boxIndex].push(cell);
      }
    }
  }

  return true;
}
