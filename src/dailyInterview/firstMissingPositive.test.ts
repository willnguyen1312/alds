import { firstMissingPositive } from "./firstMissingPositive"

describe("firstMissingPositive function", () => {
  it("should work", () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2)
  })
})
