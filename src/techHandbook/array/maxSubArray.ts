// https://leetcode.com/problems/maximum-subarray/
function maxSubArray(nums: number[]): number {
  let maxSoFar = Number.NEGATIVE_INFINITY
  let maxEndingHere = Number.NEGATIVE_INFINITY

  for (const num of nums) {
    maxEndingHere = Math.max(num, maxEndingHere + num)
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }

  return maxSoFar
}
