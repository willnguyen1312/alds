/*
Hi, here's your problem today. This problem was recently asked by Apple:

A fixed point in a list is where the value is equal to its index.
So for example the list [-5, 1, 3, 4], 1 is a fixed point in the list since the index and
value is the same. Find a fixed point (there can be many, just return 1)
in a sorted list of distinct elements, or return None if it doesn't exist.
*/

export function fixedPoint(
  arr: number[],
  low: number = 0,
  high: number = arr.length - 1,
): number {
  if (high >= low) {
    const mid = Math.floor((low + high) / 2)

    if (mid === arr[mid]) return mid
    if (mid > arr[mid]) return fixedPoint(arr, mid + 1, high)
    else return fixedPoint(arr, low, mid - 1)
  }

  return -1
}
