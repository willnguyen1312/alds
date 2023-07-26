import { removeCharacterToCreatePalindrome } from "./removeCharacterToCreatePalindrome"

describe("removeCharacterToCreatePalindrome function", () => {
  it("should work", () => {
    expect(removeCharacterToCreatePalindrome("abcdcbea")).toBe(true)
    expect(removeCharacterToCreatePalindrome("abccba")).toBe(false)
    expect(removeCharacterToCreatePalindrome("abccaa")).toBe(false)
  })
})
