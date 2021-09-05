/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given an array and an integer k, rotate the array by k spaces.
Do this without generating a new array and without using extra space.
*/

export function rotateArrayInPlace(nums: number[], k: number): number[] {
  function reverse(arr: number[], l: number, r: number) {
    while (l < r) {
      [arr[l], arr[r]] = [arr[r], arr[l]];
      l++;
      r--;
    }
  }
  k = k % nums.length;

  const len = nums.length - 1;
  reverse(nums, 0, len - k);
  reverse(nums, len - k + 1, len);
  reverse(nums, 0, len);

  return nums;
}
