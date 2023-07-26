// https://leetcode.com/problems/maximum-product-subarray/
function maxProduct(nums: number[]): number {
  let minEndingHere = nums[0]
  let maxEndingHere = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const args = [nums[i], minEndingHere * nums[i], maxEndingHere * nums[i]]

    minEndingHere = Math.min(...args)
    maxEndingHere = Math.max(...args)
    result = Math.max(maxEndingHere, result)
  }

  return result
}
