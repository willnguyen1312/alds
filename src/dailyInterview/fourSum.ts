/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a list of numbers, and a target number n, find all unique combinations of a, b, c, d,
such that a + b + c + d = n.
*/

export function fourSum(arr: number[], target: number): number[] {
  const length = arr.length
  const cache = new Map()

  for (let i = 0; i < length - 1; i++)
    for (let j = i + 1; j < length; j++) {
      cache.set(arr[i] + arr[j], [i, j])
    }

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      let sum = arr[i] + arr[j]

      if (cache.has(target - sum)) {
        const p = cache.get(target - sum)
        if (p[0] !== i && p[0] !== j && p[1] !== i && p[1] !== j) {
          return [arr[i], arr[j], arr[p[0]], arr[p[1]]]
        }
      }
    }
  }
}

export function fourSum2(nums: number[], target: number): number[][] {
  const sortedNumbs = nums.sort((a, b) => a - b)
  const result: number[][] = []

  for (let i = 0; i < sortedNumbs.length - 3; i++) {
    for (let j = i + 1; j < sortedNumbs.length - 2; j++) {
      let low = j + 1
      let high = sortedNumbs.length - 1

      while (low < high) {
        const sum =
          sortedNumbs[i] + sortedNumbs[j] + sortedNumbs[low] + sortedNumbs[high]
        if (sum === target) {
          result.push([
            sortedNumbs[i],
            sortedNumbs[j],
            sortedNumbs[low],
            sortedNumbs[high],
          ])
          while (sortedNumbs[low] === sortedNumbs[low + 1]) low++
          while (sortedNumbs[high] === sortedNumbs[high - 1]) high--
          low++
          high--
        } else if (sum < target) {
          low++
        } else {
          high--
        }
      }

      while (sortedNumbs[j] === sortedNumbs[j + 1]) j++
    }

    while (sortedNumbs[i] === sortedNumbs[i + 1]) i++
  }

  return result
}
