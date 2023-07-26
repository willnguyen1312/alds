import { characterScramble } from "./characterScramble"

describe("characterScramble function", () => {
  it("should work", () => {
    const actual = characterScramble("bat", "cat")
    expect(actual).toBe(false)

    const actual1 = characterScramble("dog", "didnotgo")
    expect(actual1).toBe(true)
  })
})
