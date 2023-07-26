/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a matrix, transpose it. Transposing a matrix means the rows are now the column and vice-versa.
*/

export function transposeSquareMatrix(matrix: number[][]) {
  const length = matrix.length
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      ;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
}

export function transposeMatrix(arr: number[][]): number[][] {
  const row = arr.length
  const column = arr[0].length
  const result: number[][] = Array.from({ length: column }, () =>
    Array.from({ length: row }),
  )

  for (let i = 0; i < column; i++) {
    for (let j = 0; j < row; j++) {
      result[i][j] = arr[j][i]
    }
  }

  return result
}
