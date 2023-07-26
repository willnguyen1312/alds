import { firstMissingPositive } from "./firstMissingPositive"

describe("firstMissingPositive", () => {
  it("should for the first case", () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2)
  })
})
