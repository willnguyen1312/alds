import { addDigits } from "./addDigits"

describe("addDigits function", () => {
  it("should work", () => {
    const actual = addDigits(159)
    expect(actual).toBe(6)
  })
})
