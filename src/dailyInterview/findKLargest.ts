/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given a list, find the k-th largest element in the list.
Input: list = [3, 5, 2, 4, 6, 8], k = 3
Output: 5
*/

function getKth(k: number, nums: number[], start: number, end: number): number {
  let pivot = nums[end]

  let left = start
  let right = end

  while (true) {
    while (nums[left] < pivot && left < right) {
      left++
    }

    while (nums[right] >= pivot && right > left) {
      right--
    }

    if (left === right) {
      break
    }

    ;[nums[left], nums[right]] = [nums[right], nums[left]]
  }

  ;[nums[end], nums[left]] = [nums[left], nums[end]]

  if (k === left + 1) {
    return pivot
  } else if (k < left + 1) {
    return getKth(k, nums, start, left - 1)
  } else {
    return getKth(k, nums, left + 1, end)
  }
}

export function findKthLargest(nums: number[], k: number) {
  if (k < 1 || nums === null) {
    return 0
  }

  return getKth(nums.length - k + 1, nums, 0, nums.length - 1)
}
