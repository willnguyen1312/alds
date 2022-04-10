// Given an array of integers sorted in increasing order and a target,
// find the index of the first element in the array that is larger than or equal to the target.
// Assume that it is guaranteed to find a satisfying number.
export function firstElementNotSmallerThanTarget(
  arr: number[],
  target: number
): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
}
