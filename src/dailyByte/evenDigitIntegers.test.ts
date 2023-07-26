import { evenDigitIntegers } from "./evenDigitIntegers"

describe("evenDigitIntegers function", () => {
  it("should work", () => {
    expect(evenDigitIntegers([1, 12, 123])).toBe(1)
    expect(evenDigitIntegers([1, 32, 3492, 23])).toBe(3)
  })
})
