// https://leetcode.com/problems/search-in-rotated-sorted-array/
function search(nums: number[], target: number): number {
  let low = 0
  let high = nums.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (nums[mid] === target) return mid

    if (nums[mid] >= nums[low]) {
      if (nums[mid] < target || target < nums[low]) low = mid + 1
      else high = mid - 1
    } else {
      if (nums[mid] > target || target > nums[high]) high = mid - 1
      else low = mid + 1
    }
  }

  return -1
}

export function searchInRotateSortedArr(
  arr: number[],
  low = 0,
  high = arr.length - 1,
  key: number,
): number {
  if (low > high) return -1

  const mid = Math.floor((low + high) / 2)
  if (arr[mid] === key) return mid

  if (arr[low] <= arr[mid]) {
    if (key >= arr[low] && key <= arr[mid]) {
      return searchInRotateSortedArr(arr, low, mid - 1, key)
    }
    return searchInRotateSortedArr(arr, mid + 1, high, key)
  }

  if (key >= arr[mid] && key <= arr[high]) {
    return searchInRotateSortedArr(arr, mid + 1, high, key)
  }

  return searchInRotateSortedArr(arr, low, mid - 1, key)
}
