export function twoSumSorted(arr: number[], target: number): [number, number] {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) {
      return [left, right]
    } else if (sum > target) {
      right--
    } else {
      left++
    }
  }

  return [-1, -1]
}
