export function firstMissingPositive(nums: number[]): number {
  // sanity check
  if (nums.length === 0) return 1

  nums.sort((a, b) => a - b) // increasing order

  let i = 0
  while (nums[i] <= 0) {
    // pre process and skip all zeros and negatives
    i += 1
  }

  // At this point, the index i is at first positive number
  let temp = 1

  while (i < nums.length) {
    if (nums[i] !== temp && nums[i] !== nums[i - 1]) {
      return temp
    }
    i += 1

    if (nums[i] !== nums[i - 1]) {
      temp += 1
    }
  }

  return temp
}
