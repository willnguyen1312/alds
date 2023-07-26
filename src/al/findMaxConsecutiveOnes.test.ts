import { findMaxConsecutiveOnes } from "./findMaxConsecutiveOnes"

describe("Name of the group", () => {
  it("should work for the first case", () => {
    const input = [1, 1, 0, 1, 1, 1]
    expect(findMaxConsecutiveOnes(input)).toBe(3)
  })

  it("should work for the second case", () => {
    const input = [1, 0, 1, 1, 0, 1]
    expect(findMaxConsecutiveOnes(input)).toBe(2)
  })
})
