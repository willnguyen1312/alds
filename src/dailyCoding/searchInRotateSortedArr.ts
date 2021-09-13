/*
This problem was asked by Amazon.

An sorted array of integers was rotated an unknown number of times.

Given such an array, find the index of the element in the array in faster than linear time.
If the element doesn't exist in the array, return null.

For example, given the array [13, 18, 25, 2, 8, 10] and the element 8, return 4
(the index of 8 in the array).

You can assume all the integers in the array are unique.
*/

export function searchInRotateSortedArr(
  arr: number[],
  low = 0,
  high = arr.length - 1,
  key: number
): number {
  if (low > high) return -1;

  const mid = Math.floor((low + high) / 2);
  if (arr[mid] === key) return mid;

  if (arr[low] <= arr[mid]) {
    if (key >= arr[low] && key <= arr[mid]) {
      return searchInRotateSortedArr(arr, low, mid - 1, key);
    }
    return searchInRotateSortedArr(arr, mid + 1, high, key);
  }

  if (key >= arr[mid] && key <= arr[high]) {
    return searchInRotateSortedArr(arr, mid + 1, high, key);
  }

  return searchInRotateSortedArr(arr, low, mid - 1, key);
}
