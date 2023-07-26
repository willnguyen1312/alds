/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given a list of sorted numbers, and two integers k and x, find k closest numbers to the pivot x.
*/

function findCrossOver(numbs: number[], low: number, high: number, x: number) {
  if (numbs[high] < x) return high

  if (numbs[low] > x) return low

  const mid = Math.floor(low + high / 2)

  if (numbs[mid] === x) {
    return mid
  }

  if (numbs[mid] < x) return findCrossOver(numbs, mid + 1, high, x)

  return findCrossOver(numbs, low, mid - 1, x)
}

export function kClosestElements(
  arr: number[],
  x: number,
  k: number,
  n = arr.length,
): number[] {
  let result: number[] = []
  let left = findCrossOver(arr, 0, n - 1, x)
  let right = left + 1
  let count = 0

  //  Check distinct value
  if (arr[left] === x) left -= 1

  while (left >= 0 && right < n && count < k) {
    if (x - arr[left] < arr[right] - x) {
      result.push(arr[left])
      left -= 1
    } else {
      result.push(arr[right])
      right += 1
    }
    count += 1
  }

  //   Get leftover values from the left
  while (count < k && left >= 0) {
    result.push(arr[left])
    left -= 1
    count += 1
  }

  //   Get leftover values from the right
  while (count < k && right < n) {
    result.push(arr[right])
    right += 1
    count += 1
  }

  return result
}
