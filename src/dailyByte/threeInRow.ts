// Given an integer array, nums, return true if there are three consecutive odd values within nums,
// otherwise, return false.

// Ex: Given the following nums…

// nums = [1, 2, 3, 4, 5], return false.
// Ex: Given the following nums…

// nums = [1, 3, 4, 2, 3, 9, 15], return true.

export function threeInRow(numbs: number[]): boolean {
  for (let i = 0; i < numbs.length - 2; i++) {
    if (
      numbs[i] % 2 === 1 &&
      numbs[i + 1] % 2 === 1 &&
      numbs[i + 2] % 2 === 1
    ) {
      return true;
    }
  }

  return false;
}
