/*
This question is asked by Amazon.
Given an array of integers, nums, sort the array in any manner such that
when i is even, nums[i] is even and when i is odd, nums[i] is odd. 
Note: It is guaranteed that a valid sorting of nums exists. 

Ex: Given the following array nums…

nums = [1, 2, 3, 4], one possible way to sort the array is [2,1,4,3]
*/

export function arrayShuffle(nums: number[]): number[] {
  let evenIndex = 0
  let oddIndex = 1

  while (evenIndex < nums.length || oddIndex < nums.length) {
    if (nums[evenIndex] % 2 === 1 && nums[oddIndex] % 2 === 0) {
      ;[nums[evenIndex], nums[oddIndex]] = [nums[oddIndex], nums[evenIndex]]
    }

    if (nums[evenIndex] % 2 === 0) {
      evenIndex += 2
    }

    if (nums[oddIndex] % 2 === 1) {
      oddIndex += 2
    }
  }

  return nums
}
