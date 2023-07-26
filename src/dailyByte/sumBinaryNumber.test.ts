import { sumBinaryNumber } from "./sumBinaryNumber"

describe("sumBinaryNumber function", () => {
  it("should work", () => {
    const actual = sumBinaryNumber("11", "1")
    expect(actual).toBe(100)
  })
})
