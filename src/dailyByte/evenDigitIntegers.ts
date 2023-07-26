// Given an integer array, nums, return the total number of integers within nums
// that have an even number of digits.

// Ex: Given the following nums…

// nums = [1, 12, 123], return 1 (12 is the only integer with an even number of digits).
// Ex: Given the following nums…

// nums = [1, 32, 3492, 23], return 3.

export function evenDigitIntegers(numbs: number[]): number {
  let count = 0
  for (let i = 0; i < numbs.length; i++) {
    if (numbs[i].toString().length % 2 === 0) {
      count++
    }
  }
  return count
}
