import { threeInRow } from "./threeInRow"

describe("threeInRow function", () => {
  it("should work", () => {
    expect(threeInRow([1, 2, 3, 4, 5])).toBe(false)
    expect(threeInRow([1, 3, 4, 2, 3, 9, 15])).toBe(true)
  })
})
