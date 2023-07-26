import { validWords } from "./validWords"

describe("validWords function", () => {
  it("should work", () => {
    expect(validWords("abc", ["d", "ab", "abce"])).toBe(1)
    expect(validWords("ake", ["ail", "kea", "a"])).toBe(2)
  })
})
