/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

You are given a positive integer N which represents the number of steps in a staircase.
You can either climb 1 or 2 steps at a time. Write a function that returns the number of unique ways
to climb the stairs.
*/

export function climbStairsRecur(
  n: number,
  cache = new Map<number, number>(),
): number {
  if (n <= 2) {
    return n
  }

  const cachedResult = cache.get(n)

  if (cachedResult) {
    return cachedResult
  }

  const result = climbStairsRecur(n - 1, cache) + climbStairsRecur(n - 2, cache)

  cache.set(n, result)
  return result
}

export function climbStairsIter(n: number): number {
  const res: number[] = []
  res[0] = 1
  res[1] = 1
  res[2] = 2

  for (let i = 3; i <= n; i++) {
    res[i] = res[i - 1] + res[i - 2]
  }

  return res[n]
}
