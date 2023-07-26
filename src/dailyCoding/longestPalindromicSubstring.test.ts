import {
  longestPalindromicSubstring,
  longestPalindromicSubstring2,
} from "./longestPalindromicSubstring"

describe("longestPalindromicSubstring function", () => {
  it("should work", () => {
    const actual = longestPalindromicSubstring("bananas")
    expect(actual).toBe("anana")
    const actual2 = longestPalindromicSubstring2("aabcdcb")
    expect(actual2).toBe("bcdcb")
  })
})
