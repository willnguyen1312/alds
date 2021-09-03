function checkSafe(
  board: number[][],
  row: number,
  col: number,
  num: number
): boolean {
  // Check row
  for (let column = 0; column < board.length; column++) {
    if (board[row][column] === num) {
      return false;
    }
  }

  // Check column
  for (let row = 0; row < board.length; row++) {
    if (board[row][col] === num) {
      return false;
    }
  }

  let sqrt = Math.floor(Math.sqrt(board.length));
  let boxRowStart = row - (row % sqrt);
  let boxColStart = col - (col % sqrt);

  //   Check sub grid
  for (let row = boxRowStart; row < boxRowStart + sqrt; row++) {
    for (let column = boxColStart; column < boxColStart + sqrt; column++) {
      if (board[row][column] === num) {
        return false;
      }
    }
  }

  return true;
}

export function sudokuSolver(board: number[][]) {
  const length = board.length;
  let row = 0;
  let col = 0;
  let isEmpty = true;

  //   Check zero and get first fillable cell
  for (let _row = 0; _row < length; _row++) {
    for (let _column = 0; _column < length; _column++) {
      if (board[_row][_column] === 0) {
        row = _row;
        col = _column;

        isEmpty = false;
        break;
      }
    }
    if (!isEmpty) {
      break;
    }
  }

  if (isEmpty) {
    return true;
  }

  //   Start filling from 1 to n (length)
  // Else for each-row backtrack
  for (let num = 1; num <= length; num++) {
    if (checkSafe(board, row, col, num)) {
      board[row][col] = num;
      if (sudokuSolver(board)) {
        return true;
      } else {
        board[row][col] = 0;
      }
    }
  }

  return false;
}
