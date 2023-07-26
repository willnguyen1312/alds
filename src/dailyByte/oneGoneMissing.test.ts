import { oneGoneMissing } from "./oneGoneMissing"

describe("oneGoneMissing function", () => {
  it("should work", () => {
    const actual = oneGoneMissing([6, 3, 1, 2, 0, 5])
    expect(actual).toBe(4)
  })
})
