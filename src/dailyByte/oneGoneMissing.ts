/*
This question is asked by Amazon. Given an array that contains all distinct values
from zero through N except one number, return the number that is missing from the array. 

Ex: Given the following array nums…

nums = [1, 4, 2, 0], return 3.
3 is the only number missing in the array between 0 and 4.
Ex: Given the following array nums…

nums = [6, 3, 1, 2, 0, 5], return 4.
4 is the only number missing in the array between 0 and 6.
*/

export function oneGoneMissing(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i < nums.length; i++) {
    let correctPosition = nums[i] - 1;

    while (nums[i] > 0 && nums[i] <= n && nums[correctPosition] !== nums[i]) {
      [nums[correctPosition], nums[i]] = [nums[i], nums[correctPosition]];
      correctPosition = nums[i] - 1;
    }
  }

  for (let i = 0; i < n; i++) if (nums[i] !== i + 1) return i + 1;

  return n + 1;
}
