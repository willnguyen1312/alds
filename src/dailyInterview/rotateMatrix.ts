/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a square 2D matrix (n x n), rotate the matrix by 90 degrees clockwise.
*/

export function rotateMatrix(matrix: number[][]): number[][] {
  const length = matrix.length
  for (let i = 0; i < Math.floor(length / 2); i++) {
    for (let j = i; j < length - i - 1; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[length - 1 - j][i]
      matrix[length - 1 - j][i] = matrix[length - 1 - i][length - 1 - j]
      matrix[length - 1 - i][length - 1 - j] = matrix[j][length - 1 - i]
      matrix[j][length - 1 - i] = temp
    }
  }

  return matrix
}
