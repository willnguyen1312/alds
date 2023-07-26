import { palindromePartitioning } from "./palindromePartitioning"

describe("palindromePartitioning function", () => {
  it("should work", () => {
    const actual = palindromePartitioning("abcba")
    expect(actual).toEqual([
      ["a", "b", "c", "b", "a"],
      ["a", "bcb", "a"],
      ["abcba"],
    ])
  })
})
