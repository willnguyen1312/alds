/*
Given an integer array nums, return an array where each element i
represents the product of all values in nums excluding nums[i]. 

Note: You may assume the product of all numbers within nums can safely fit within an integer range. 

Ex: Given the following array nums…

nums = [1, 2, 3], return [6,3,2].
6 = 3 * 2 (we exclude 1)
3 = 3 * 1 (we exclude 2)
2 = 2 * 1 (we exclude 3)
*/

export function products(numbs: number[]): number[] {
  const result = []

  result[0] = 1
  for (let i = 1; i < numbs.length; ++i) {
    result[i] = result[i - 1] * numbs[i - 1]
  }

  let right = 1
  for (let i = numbs.length - 1; i >= 0; --i) {
    result[i] = right * result[i]
    right *= numbs[i]
  }

  return result
}
