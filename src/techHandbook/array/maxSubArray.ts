// https://leetcode.com/problems/maximum-subarray/
function maxSubArray(nums: number[]): number {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (const num of nums) {
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
