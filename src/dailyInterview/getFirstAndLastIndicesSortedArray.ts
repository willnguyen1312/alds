/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given a sorted array, A, with possibly duplicated elements, find the indices of the first and last occurrences of a target element, x. Return -1 if the target is not found.

Example:
Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
Output: [6,8]

Input: A = [100, 150, 150, 153], target = 150
Output: [1,2]

Input: A = [1,2,3,4,5,6,10], target = 9
Output: [-1, -1]
*/

export function getFirstAndLastIndicesSortedArray(
  nums: number[],
  target: number,
): number[] {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const middle = Math.floor((right + left) / 2)
    const current = nums[middle]

    if (current === target) {
      return getRange(nums, middle)
    }

    if (current > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return [-1, -1]
}

function getRange(nums: number[], index: number) {
  const target = nums[index]
  let left = index
  let right = index

  while (nums[left] === target) {
    left--
  }

  while (nums[right] === target) {
    right++
  }

  return [left + 1, right - 1]
}
