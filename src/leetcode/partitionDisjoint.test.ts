export function partitionDisjoint(nums: number[]): number {
  let current = nums[0]
  let max = 0
  let position = 0

  for (let index = 1; index < nums.length; index++) {
    const num = nums[index]

    max = Math.max(num, max)
    if (current <= num) continue
    position = index
    current = Math.max(max, current)
  }
  return position + 1
}

describe("partitionDisjoint", () => {
  it("runs as expected", () => {
    const input = [5, 0, 3, 8, 6]
    const result = partitionDisjoint(input)
    const expected = 3
    expect(result).toBe(expected)
  })
  it("runs as expected with second example", () => {
    const input = [1, 1, 1, 0, 6, 12]
    const result = partitionDisjoint(input)
    const expected = 4
    expect(result).toBe(expected)
  })
  it("runs as expected with third example", () => {
    const input = [1, 1]
    const result = partitionDisjoint(input)
    const expected = 1
    expect(result).toBe(expected)
  })
  it("runs as expected with fourth example", () => {
    const input = [26, 51, 40, 58, 42, 76, 30, 48, 79, 91]
    const result = partitionDisjoint(input)
    const expected = 1
    expect(result).toBe(expected)
  })
})
