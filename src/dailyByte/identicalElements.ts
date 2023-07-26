/*
This question is asked by Google.

Given an array, nums, and an integer k,
return whether or not two unique indices exist such that nums[i] = nums[j]
and the two indices i and jj are at most k elements apart.
Ex: Given the following array nums and value k…

nums = [1, 2, 1], k = 1, return false.
Ex: Given the following array nums and value k…

nums = [2, 3, 2], k = 2, return true.
*/

export function identicalElements(numbs: number[], distance: number): boolean {
  const hash: Record<string, number> = {}

  for (let index = 0; index < numbs.length; index++) {
    const element = numbs[index]

    if (hash[element] !== undefined) {
      const diff = index - hash[element]
      if (diff <= distance) {
        return true
      }
    }

    hash[element] = index
  }

  return false
}
