// A mountain array is defined as an array that

// has at least 3 elements
// let's call the element with the largest value the "peak", with index k.
// The array elements monotonically increase from the first element to A[k],
// and then monotonically decreases from A[k + 1] to the last element of the array.
// Thus creating a "mountain" of numbers.

export function findPeakOfTheMountain(arr: number[]): number {
  let left = 0
  let right = arr.length - 1
  let result = -1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[mid] > arr[mid + 1]) {
      result = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return result
}
