/*
You are transporting bricks on a construction site and
want to work as efficiently as possible. The weight of each brick is given by bricks[i].
Given a wheelbarrow that can carry up to (not including) 5000 pounds,
return then maximum number of bricks you can place in your wheelbarrow to transport.

Ex: Given the following bricks…

bricks = [1000, 1000, 1000, 2000], return 3.

Ex: Given the following bricks…

bricks = [1000, 200, 150, 200], return 4.
*/

export function movingBricks(arr: number[], limit: number): number {
  let result = 0
  let sum = 0

  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] < limit) {
      sum = sum + arr[i]
      result++
    }
  }

  return result
}
