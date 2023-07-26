import { doubleValue } from "./doubleValue"

describe("doubleValue function", () => {
  it("should work", () => {
    expect(doubleValue([4, 3, 9, 8])).toBe(true)
    expect(doubleValue([9, 2, 3, 5])).toBe(false)
  })
})
