/*
Given a 2D array containing only the following values:
-1, 0, 1 where -1 represents an obstacle, 0 represents a rabbit hole,
and 1 represents a rabbit, update every cell containing a rabbit with
the distance to its closest rabbit hole.

Note: multiple rabbit may occupy a single rabbit hole and
you may assume every rabbit can reach a rabbit hole.
A rabbit can only move up, down, left, or right in a single move.

Ex: Given the following grid…

-1  0  1
 1  1 -1
 1  1  0
your grid should look like the following after running the function...
-1  0  1
2  1 -1
2  1  0
Ex: Given the following grid…

 1  1  1
 1 -1 -1
 1  1  0
your grid should look like the following after running the function...
4  5  6
3 -1 -1
2  1  0
*/

export function distanceToRabbitHoles(grid: number[][]) {
  const rabbitPositions: number[][] = []

  const row = grid.length
  const column = grid[0].length

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (grid[i][j] === 1) {
        rabbitPositions.push([i, j])
      }
    }
  }

  const directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 },
  ]

  function travel(i: number, j: number, currentDistance = 0) {
    if (i < 0 || j < 0 || i >= row || j >= column || grid[i][j] === -1) {
      return Number.MAX_VALUE
    }

    if (grid[i][j] === 0) {
      return currentDistance
    }

    const travelSteps = directions.map((direction) => {
      const original = grid[i][j]
      grid[i][j] = -1
      const step = travel(i + direction.x, j + direction.y, currentDistance + 1)
      grid[i][j] = original
      return step
    })

    return Math.min(...travelSteps)
  }

  for (const position of rabbitPositions) {
    const [i, j] = position
    grid[i][j] = travel(i, j)
  }
}
