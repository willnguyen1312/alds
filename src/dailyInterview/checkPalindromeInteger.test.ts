import { checkPalindromeInteger } from "./checkPalindromeInteger"

describe("checkPalindromeInteger function", () => {
  it("should work", () => {
    expect(checkPalindromeInteger(1234321)).toBe(true)
    expect(checkPalindromeInteger(1234322)).toBe(false)
    expect(checkPalindromeInteger(123321)).toBe(true)
    expect(checkPalindromeInteger(123421)).toBe(false)
  })
})
