/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

The power function calculates x raised to the nth power.
If implemented in O(n) it would simply be a for loop over n and multiply x n times. 
Instead implement this power function in O(log n) time.
You can assume that n will be a non-negative integer.
*/

export function powerFunction(x: number, y: number): number {
  if (y === 0) return 1

  const temp = powerFunction(x, Math.floor(y / 2))

  if (y % 2 === 0) return temp * temp

  return x * temp * temp
}
