/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given a list of numbers, where every number shows up twice except for one number, find that one number.

Example:
Input: [4, 3, 2, 4, 1, 3, 2]
Output: 1
*/

export function findNoneDuplicateNumber(numbs: number[]): number {
  let result = 0

  for (const numb of numbs) {
    result ^= numb
  }

  return result
}

export function findNoneDuplicateNumberExtra(numbs: number[]): number {
  const cache: Map<number, number> = new Map()

  for (const numb of numbs) {
    const inCache = cache.has(numb)

    if (!inCache) {
      cache.set(numb, 1)
    } else {
      cache.set(numb, cache.get(numb) + 1)
    }
  }

  for (const numb of numbs) {
    if (cache.get(numb) === 1) {
      return numb
    }
  }

  return -1
}
