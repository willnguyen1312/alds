/*
This problem was asked by Amazon.

Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86],
the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0,
since we would not take any elements.
*/

export function maxSumContinuousSubArr(numbs: number[]): number {
  let maxEndingHere = 0;
  let maxSoFar = Number.MIN_VALUE;

  for (let i = 0; i < numbs.length; i++) {
    maxEndingHere = Math.max(numbs[i], maxEndingHere + numbs[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}
