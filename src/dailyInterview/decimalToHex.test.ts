import { decimalToHex } from "./decimalToHex"

describe("decimalToHex function", () => {
  it("should work", () => {
    const actual = decimalToHex(123)
    expect(actual).toBe("7B")
  })
})
