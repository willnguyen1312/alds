import { minimumSizeSubarraySum } from "./minimumSizeSubarraySum"

describe("minimumSizeSubarraySum function", () => {
  it("should work", () => {
    expect(minimumSizeSubarraySum([2, 3, 1, 2, 4, 3], 7)).toBe(2)
    expect(minimumSizeSubarraySum([1, 1, 1, 1, 1, 1], 11)).toBe(0)
  })
})
