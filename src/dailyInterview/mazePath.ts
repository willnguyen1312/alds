/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

A maze is a matrix where each cell can either be a 0 or 1. A 0 represents that the cell is empty,
and a 1 represents a wall that cannot be walked through. You can also only travel either right or down.

Given a nxm matrix, find the number of ways someone can go from the top left corner to
the bottom right corner. You can assume the two corners will always be 0.

Example:
Input: [[0, 1, 0], [0, 0, 1], [0, 0, 0]]
# 0 1 0
# 0 0 1
# 0 0 0
Output: 2
The two paths that can only be taken in the above example are: down -> right -> down -> right,
and down -> down -> right -> right.
*/

export function mazePath(maze: number[][]): number {
  const rowCount = maze.length;
  const columnCount = maze[0].length;

  for (let index = 0; index < rowCount; index++) {
    for (let jndex = 0; jndex < columnCount; jndex++) {
      if (maze[index][jndex] === 1) {
        maze[index][jndex] = -1;
      }
    }
  }

  if (maze[0][0] === 1) return 0;

  //   Initialize ways for left-most column
  for (let i = 0; i < rowCount; i++) {
    if (maze[i][0] === 0) maze[i][0] = 1;
    else break;
  }

  //   Initialize ways for top-most row
  for (let i = 1; i < columnCount; i++) {
    if (maze[0][i] === 0) maze[0][i] = 1;
    else break;
  }

  for (let i = 1; i < rowCount; i++) {
    for (let j = 1; j < columnCount; j++) {
      if (maze[i][j] === -1) continue;

      if (maze[i - 1][j] > 0) maze[i][j] = maze[i][j] + maze[i - 1][j];

      if (maze[i][j - 1] > 0) maze[i][j] = maze[i][j] + maze[i][j - 1];
    }
  }

  return maze[rowCount - 1][columnCount - 1] > 0
    ? maze[rowCount - 1][columnCount - 1]
    : 0;
}
