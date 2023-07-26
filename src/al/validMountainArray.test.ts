import { validMountainArray } from "./validMountainArray"

describe("validMountainArray", () => {
  it("should work for the first case", () => {
    expect(validMountainArray([0, 3, 2, 1])).toBe(true)
  })

  it("should work for the second case", () => {
    expect(validMountainArray([0, 1, 4, 3, 6, 5, 2, 1])).toBe(false)
  })

  it("should work for the third case", () => {
    expect(validMountainArray([3, 5, 5])).toBe(false)
  })
})
