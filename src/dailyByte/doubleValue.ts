// Given an integer array, nums, return true if for any value within nums its double also exists within the array.

// Ex: Given the following nums…

// nums = [4, 3, 9, 8], return true (4 and 8 both appear in nums).
// Ex: Given the following nums…

// nums = [9, 2, 3, 5], return false.

export function doubleValue(numbs: number[]): boolean {
  const numbSet = new Set<number>(numbs);

  for (const numb of numbs) {
    if (numbSet.has(numb * 2)) {
      return true;
    }
  }

  return false;
}
