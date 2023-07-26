/*
This question is asked by Facebook. Given an array nums,
return whether or not its values are monotonically increasing or monotonically decreasing. 
Note: An array is monotonically increasing if for all values i <= j, nums[i] <= nums[j].
Similarly an array is monotonically decreasing if for all values i <= j, nums[i] >= nums[j]. 

Ex: Given the following array nums…

nums = [1, 2, 3, 4, 4, 5], return true.
Ex: Given the following array nums…

nums = [7, 6, 3], return true.
Ex: Given the following array nums…

nums = [8, 4, 6], return false.
*/

export function isMonotonic(numbs: number[]): boolean {
  let i = 0
  let type: "asc" | "dsc" = "asc"

  while (i < numbs.length - 1) {
    if (numbs[i] !== numbs[i + 1]) {
      type = numbs[i] > numbs[i + 1] ? "dsc" : "asc"
      break
    }
    i++
  }

  function checkValid(first: number, second: number): boolean {
    if (type === "asc") {
      return first <= second
    }

    return first >= second
  }

  for (let index = i; index < numbs.length - 1; index++) {
    if (!checkValid(numbs[index], numbs[index + 1])) {
      return false
    }
  }

  return true
}
