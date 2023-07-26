/*
This problem was asked by Google.

We can determine how "out of order" an array A is by counting the number of inversions it has.
Two elements A[i] and A[j] form an inversion if A[i] > A[j] but i < j.
That is, a smaller element appears after a larger element.

Given an array, count the number of inversions it has. Do this faster than O(N^2) time.

You may assume each element in the array is distinct.

For example, a sorted list has zero inversions. The array [2, 4, 1, 3, 5]
has three inversions: (2, 1), (4, 1), and (4, 3). The array [5, 4, 3, 2, 1]
has ten inversions: every distinct pair forms an inversion.
*/

function mergeAndCount(arr: number[], l: number, m: number, r: number): number {
  // Left subarray
  let left: number[] = []
  for (let i = l; i < m + 1; i++) {
    left.push(arr[i])
  }

  // Right subarray
  let right = []
  for (let i = m + 1; i < r + 1; i++) {
    right.push(arr[i])
  }

  let i = 0
  let j = 0
  let k = l
  let result = 0

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k++] = left[i++]
    } else {
      arr[k++] = right[j++]
      result += m + 1 - (l + i)
    }
  }

  while (i < left.length) {
    arr[k++] = left[i++]
  }

  while (j < right.length) {
    arr[k++] = right[j++]
  }

  return result
}

export function countInversion(
  arr: number[],
  l = 0,
  r = arr.length - 1,
): number {
  let count = 0
  if (l < r) {
    let m = Math.floor((l + r) / 2)

    // Left subarray count
    count += countInversion(arr, l, m)

    // Right subarray count
    count += countInversion(arr, m + 1, r)

    // Merge count
    count += mergeAndCount(arr, l, m, r)
  }

  return count
}
