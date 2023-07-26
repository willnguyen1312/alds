/*
Hi, here's your problem today. This problem was recently asked by Facebook:

You are given an array of integers. Return the smallest positive integer that is not present in the array.
The array may contain duplicate entries.

For example, the input [3, 4, -1, 1] should return 2 because it is the smallest positive integer
that doesn't exist in the array.

Your solution should run in linear time and use constant space.
*/

export function firstMissingPositive(nums: number[]): number {
  const n = nums.length

  for (let i = 0; i < nums.length; i++) {
    let correctPosition = nums[i] - 1

    while (nums[i] > 0 && nums[i] <= n && nums[correctPosition] !== nums[i]) {
      ;[nums[correctPosition], nums[i]] = [nums[i], nums[correctPosition]]
      correctPosition = nums[i] - 1
    }
  }

  for (let i = 0; i < n; i++) if (nums[i] !== i + 1) return i + 1

  return n + 1
}
