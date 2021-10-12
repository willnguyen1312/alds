/*
This problem was asked by Google.

You are in an infinite 2D grid where you can move in any of the 8 directions:

    (x,y) to
    (x+1, y),
    (x - 1, y),
    (x, y+1),
    (x, y-1),
    (x-1, y-1),
    (x+1,y+1),
    (x-1,y+1),
    (x+1,y-1)
You are given a sequence of points and the order in which you need to cover the points.
Give the minimum number of steps in which you can achieve it. You start from the first point.

Example:

Input: [(0, 0), (1, 1), (1, 2)]
Output: 2
It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).
*/

export function runInGrid(input: [number, number][]): number {
  function shortestPath(p1: [number, number], p2: [number, number]) {
    return Math.max(Math.abs(p1[0] - p2[0]), Math.abs(p1[1] - p2[1]));
  }

  let result = 0;

  for (let index = 0; index < input.length - 1; index++) {
    result += shortestPath(input[index], input[index + 1]);
  }

  return result;
}
