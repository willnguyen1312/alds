/*
This question is asked by Google.
Given an NxM matrix, grid, where each cell in the matrix represents
the cost of stepping on the current cell, return the minimum cost to traverse
from the top-left hand corner of the matrix to the bottom-right hand corner. 


Note: You may only move down or right while traversing the grid. 
Ex: Given the following grid…

grid = [
    [1,1,3],
    [2,3,1],
    [4,6,1]
], return 7.
The path that minimizes our cost is 1->1->3->1->1 which sums to 7.
*/

function sum(numbs: number[]) {
  return numbs.reduce((acc, cur) => acc + cur, 0);
}

export function minimizePaths(grid: number[][]): number {
  const row = grid.length;

  if (row === 0) {
    return 0;
  }

  const column = grid[0].length;
  if (row === 1) {
    return sum(grid[0]);
  }

  if (column === 1) {
    return sum(grid.map((item) => item[0]));
  }

  for (let index = 1; index < column; index++) {
    const prevElement = grid[0][index - 1];
    grid[0][index] = prevElement + grid[0][index];
  }

  for (let index = 1; index < row; index++) {
    const prevElement = grid[index - 1][0];
    grid[index][0] = prevElement + grid[index][0];
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
    }
  }

  return grid[row - 1][column - 1];
}
