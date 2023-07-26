// Given a sorted array of integers and a target integer,
// find the first occurrence of the target and return its index.
// Return -1 if the target is not in the array.

export function findFirstOccurrence(arr: number[], target: number): number {
  let left = 0
  let right = arr.length - 1
  let result = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] >= target) {
      result = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return result
}
