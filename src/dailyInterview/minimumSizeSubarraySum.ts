/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s.
If there isn't one, return 0 instead.

Example:
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
*/

export function minimumSizeSubarraySum(numbs: number[], x: number) {
  // Initialize current sum and minimum length
  let curr_sum = 0
  let result = Infinity
  const length = numbs.length

  // Initialize starting and ending indexes
  let start = 0
  let end = 0

  while (end < length) {
    // Keep adding array elements while current sum
    // is smaller than or equal to x
    while (curr_sum < x && end < length) {
      curr_sum += numbs[end]
      end++
    }

    // If current sum becomes greater than x.
    while (curr_sum >= x && start < length) {
      // Update minimum length if needed
      const range = end - start
      result = result > range ? range : result

      // remove starting elements
      curr_sum -= numbs[start]
      start++
    }
  }

  return result === Infinity ? 0 : result
}
