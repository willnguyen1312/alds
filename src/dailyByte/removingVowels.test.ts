import { removingVowels } from "./removingVowels"

describe("removingVowels function", () => {
  it("should work", () => {
    const actual1 = removingVowels("aeiou")
    expect(actual1).toBe("")
    const actual2 = removingVowels("byte")
    expect(actual2).toBe("byt")
    const actual3 = removingVowels("xyz")
    expect(actual3).toBe("xyz")
  })
})
