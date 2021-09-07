/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given a matrix that is organized such that the numbers will always be sorted left to right,
and the first number of each row will always be greater than the last element of
the last row (mat[i][0] > mat[i - 1][-1]), search for a specific value in the matrix
and return whether it exists.
*/

export function searchInMatrix(matrix: number[][], target: number): boolean {
  let row = 0;
  let col = matrix[0].length - 1;

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--;
    } else if (matrix[row][col] < target) {
      row++;
    } else {
      return true;
    }
  }
  return false;
}
