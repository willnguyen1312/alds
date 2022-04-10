// A sorted array was rotated at an unknown pivot.
// For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20].
// Find the index of the minimum element in this array.

// Return the minimum index if the minimum number is repeated.

export function findMinimumInRotatedArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] <= arr[right]) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}
