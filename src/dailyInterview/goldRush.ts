/*
This question is asked by Amazon. Given a 2D matrix that represents a gold mine,
where each cell’s value represents an amount of gold,
return the maximum amount of gold you can collect given the following rules:

You may start and stop collecting gold from any position
You can never visit a cell that contains 0 gold
You cannot visit the same cell more than once
From the current cell, you may walk one cell to the left, right, up, or down
Ex: Given the following gold mine…

goldMine = [
    [0,2,0],
    [8,6,3],
    [0,9,0]
],
return 23 (start at 9 and then move to 6 and 8 respectively)
*/

export function goldRush(grid: number[][]): number {
  const row = grid.length;
  const column = grid[0].length;

  const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let res = 0;

  function explore(a: number, b: number): number {
    if (a < 0 || b < 0 || b >= column || a >= row || !grid[a][b]) return 0;

    let value = grid[a][b];
    grid[a][b] = 0;

    let sum = 0;
    for (let i = 0; i < dir.length; i++) {
      sum = Math.max(sum, explore(a + dir[i][0], b + dir[i][1]));
    }

    grid[a][b] = value;
    return sum + value;
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      res = Math.max(res, explore(i, j));
    }
  }

  return res;
}
