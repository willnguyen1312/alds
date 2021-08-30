/*
Hi, here's your problem today. This problem was recently asked by Twitter:

You are given an array of integers.
Find the maximum sum of all possible contiguous subarrays of the array.

Example:

[34, -50, 42, 14, -5, 86]

Given this input array, the output should be 137.
The contiguous subarray with the largest sum is [42, 14, -5, 86].
*/

export function contiguousSubarrayWithMaximumSum(numbs: number[]): number {
  let maxEndingHere = 0;
  let maxSoFar = Number.MIN_VALUE;

  for (let i = 0; i < numbs.length; i++) {
    if (numbs[i] <= maxEndingHere + numbs[i]) {
      maxEndingHere += numbs[i];
    } else {
      maxEndingHere = numbs[i];
    }

    maxSoFar = Math.max(maxSoFar, maxEndingHere);

    // Another implementation
    // maxEndingHere = Math.max(numbs[i], maxEndingHere + numbs[i]);
    // maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

export function maxSubArraySum(numbs: number[]): number[] {
  let maxSoFar = Number.MIN_VALUE;
  let maxEndingHere = 0;
  let start = 0;
  let end = 0;
  let s = 0;

  for (let i = 0; i < numbs.length; i++) {
    maxEndingHere += numbs[i];

    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
      start = s;
      end = i;
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
      s = i + 1;
    }
  }

  return [maxSoFar, start, end];
}
