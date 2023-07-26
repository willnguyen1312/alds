export function sortArrayByParity(nums: number[]): number[] {
  const result: number[] = []
  let i = 0
  let j = nums.length - 1
  let k = 0

  while (k < nums.length) {
    const element = nums[k]
    if (element % 2 === 0) {
      result[i] = element
      i++
    } else {
      result[j] = element
      j--
    }

    k++
  }

  return result
}
