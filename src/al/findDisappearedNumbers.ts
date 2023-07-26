export function findDisappearedNumbers(nums: number[]): number[] {
  const result = []

  for (const number of nums) {
    const index = Math.abs(number) - 1
    if (nums[index] > 0) {
      nums[index] = -nums[index]
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1)
    }
  }

  return result
}
