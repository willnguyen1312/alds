/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given a sorted list of positive numbers, find the smallest positive number
that cannot be a sum of any subset in the list.

Example:
Input: [1, 2, 3, 8, 9, 10]
Output: 7
*/

export function findSmallestNoneSum(arr: number[]): number {
  let result = 1

  // Traverse the array and increment 'res' if arr[i] is
  // smaller than or equal to 'res'.
  for (let i = 0; i < arr.length && arr[i] <= result; i++) {
    result = result + arr[i]
  }

  return result
}
