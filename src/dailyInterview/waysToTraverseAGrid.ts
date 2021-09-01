/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

You 2 integers n and m representing an n by m grid, determine the number of ways you can get from the top-left to the bottom-right of the matrix y going only right or down.

Example:
n = 2, m = 2

This should return 2, since the only possible routes are:
Right, down
Down, right.
*/

export function waysToTraverseAGrid(row: number, column: number): number {
  const count: number[][] = Array.from(
    { length: row },
    () => new Array(column)
  );

  for (let index = 0; index < row; index++) {
    count[0][index] = 1;
  }

  for (let index = 0; index < row; index++) {
    count[index][0] = 1;
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++)
      // By un-commenting the last part the
      // code calculates the total possible paths
      // if the diagonal Movements are allowed
      // + count[i-1][j-1]
      count[i][j] = count[i - 1][j] + count[i][j - 1];
  }

  return count[row - 1][column - 1];
}
