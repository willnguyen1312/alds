/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given an array, nums, of n integers, find all unique triplets (three numbers, a, b, & c)
in nums such that a + b + c = 0. Note that there may not be any triplets that sum to zero in nums,
and that the triplets must not be duplicates.

Example:
Input: nums = [0, -1, 2, -3, 1]
Output: [0, -1, 1], [2, -3, 1]
*/

export function threeSum(array: number[], targetSum: number): number[][] {
  array.sort((a, b) => a - b);
  const triplets: number[][] = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      const currentSum = array[i] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }

  return triplets;
}

export function findTriplets(arr: number[], target: number): number[][] {
  const result: number[][] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const set = new Set();
    for (let j = i + 1; j < arr.length; j++) {
      const x = target - (arr[i] + arr[j]);
      if (set.has(x)) {
        result.push([arr[i], x, arr[j]]);
      } else {
        set.add(arr[j]);
      }
    }
  }

  return result;
}
