import { checkPalindrome } from "./checkPalindrome"

// o geese see God?

describe("checkPalindrome function", () => {
  it("should work", () => {
    expect(checkPalindrome("do geese see God?")).toBe(true)
  })
})
