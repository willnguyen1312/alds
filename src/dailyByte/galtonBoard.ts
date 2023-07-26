/*
This question is asked by Google. A ball is dropped into a special Galton board
where at each level in the board the ball can only move right or down.
Given that the Galton board has M rows and N columns, return the total number of unique ways
the ball can arrive at the bottom right cell of the Galton board. 

Ex: Given the following values of M and N…

M = 2, N = 2, return 2.
The possible paths are DOWN -> RIGHT and RIGHT -> DOWN 
Ex: Given the following values of M and N…

M = 4, N = 3, return 10.
*/

export function galtonBoard(row: number, column: number): number {
  const count: number[][] = Array.from({ length: row }, () => new Array(column))

  for (let index = 0; index < row; index++) {
    count[0][index] = 1
  }

  for (let index = 0; index < row; index++) {
    count[index][0] = 1
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++)
      count[i][j] = count[i - 1][j] + count[i][j - 1]
  }

  return count[row - 1][column - 1]
}
