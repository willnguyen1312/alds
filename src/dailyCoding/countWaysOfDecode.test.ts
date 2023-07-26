import { countWaysOfDecode } from "./countWaysOfDecode"

describe("countWaysOfDecode function", () => {
  it("should work", () => {
    const actual = countWaysOfDecode("111")
    expect(actual).toBe(3)
  })
})
