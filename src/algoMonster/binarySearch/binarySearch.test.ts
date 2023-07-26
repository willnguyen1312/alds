import { binarySearch } from "./binarySearch"

describe("binarySearch function", () => {
  it("should work", () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)).toBe(4)
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)).toBe(0)
  })
})
