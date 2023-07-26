import { reverseVowels } from "./reverseVowels"

describe("reverseVowels function", () => {
  it("should work", () => {
    const actual = reverseVowels("computer")
    expect(actual).toBe("cemputor")

    const actual2 = reverseVowels("The Daily Byte")
    expect(actual2).toBe("The Dialy Byte")
  })
})
