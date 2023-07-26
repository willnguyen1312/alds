/*
Given a list of integers S and a target number k,
write a function that returns a subset of S that adds up to k.
If such a subset cannot be made, then return null.

Integers can appear more than once in the list.
You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24,
return [12, 9, 2, 1] since it sums up to 24.
*/

export function sumToK(candidates: number[], target: number): number[] {
  const result: number[][] = []
  const path: number[] = []

  function sumToKHelper(sum: number, startIndex: number) {
    if (sum === target) {
      result.push([...path])
      return
    }

    for (
      let i = startIndex;
      i < candidates.length && candidates[i] + sum <= target;
      i++
    ) {
      path.push(candidates[i])
      sumToKHelper(sum + candidates[i], i + 1)
      path.pop()
    }
  }

  candidates.sort((a, b) => a - b)
  sumToKHelper(0, 0)

  return result[0]
}
