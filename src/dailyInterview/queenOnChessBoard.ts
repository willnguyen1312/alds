/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

N-Queens is the problem where you find a way to put n queens on a nxn chess board
without them being able to attack each other. Given an integer n, return 1 possible solution
by returning all the queen's position.
*/

function isSafe(board: number[][], row: number, col: number) {
  /* Check this row on left side */
  for (let i = 0; i < col; i++) {
    if (board[row][i] === 1) return false;
  }

  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 1) return false;
  }

  for (let i = row, j = col; j >= 0 && i < board.length; i++, j--) {
    if (board[i][j] === 1) return false;
  }

  return true;
}

function solveNQUtil(board: number[][], col = 0) {
  if (col >= board.length) return true;

  for (let i = 0; i < board.length; i++) {
    if (isSafe(board, i, col)) {
      board[i][col] = 1;

      if (solveNQUtil(board, col + 1)) return true;

      board[i][col] = 0;
    }
  }

  return false;
}

export function queenOnChessBoard(numb: number): number[][] {
  const board: number[][] = Array.from({ length: numb }, () => new Array(numb));
  solveNQUtil(board);
  return board;
}
