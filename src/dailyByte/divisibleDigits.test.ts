import { divisibleDigits } from "./divisibleDigits"

describe("divisibleDigits function", () => {
  it("should work", () => {
    const actual = divisibleDigits(17)
    expect(actual).toBe(12)
  })
})
