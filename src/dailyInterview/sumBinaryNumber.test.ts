import { sumBinaryNumber } from "./sumBinaryNumber"

describe("sumBinaryNumber function", () => {
  it("should work", () => {
    const actual = sumBinaryNumber("11101", "1011")
    expect(actual).toBe(101000)
  })
})
