export function removeDuplicates(nums: number[]): number {
  let i = 0
  let j = 0

  while (j < nums.length) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j]
      i++
    }

    j++
  }

  return i + 1
}
