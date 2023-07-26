// Given an array of integers, nums, return an array that contains nums sorted in ascending order
// according to their number of one bits.
// Note: If two values have the same number of one bits, they should be sorted in ascending order.

export function bitByBit(nums: number[]): number[] {
  const numsWithBinary: { ones: number; decimal: number }[] = nums.map(
    (num) => {
      return {
        decimal: num,
        ones: countNumOfOne(num),
      }
    },
  )

  numsWithBinary.sort((first, second) => {
    if (first.ones < second.ones) {
      return -1
    }

    if (first.ones > second.ones) {
      return 1
    }

    return first.decimal - second.decimal
  })

  return numsWithBinary.map((item) => item.decimal)
}

function countNumOfOne(n: number) {
  const result: number[] = []

  while (n > 0) {
    result.push(n % 2)
    n = Math.floor(n / 2)
  }

  return result.reduce((acc, curr) => {
    if (curr === 1) {
      acc++
    }

    return acc
  }, 0)
}
