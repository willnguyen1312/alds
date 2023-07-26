import { findKLargestNumber } from "./findKLargestNumber"

describe("findKLargest", () => {
  it("should work for the first case", () => {
    expect(findKLargestNumber([1, 4, 3, 2, 5, 6, 7], 2)).toBe(6)
    expect(findKLargestNumber([3, 5, 2, 4, 6, 8], 3)).toBe(5)
  })
})
