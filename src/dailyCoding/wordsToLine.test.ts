import { wordsToLine } from "./wordsToLine"

describe("wordsToLine function", () => {
  it("should work", () => {
    const actual = wordsToLine(
      "the quick brown fox jumps over the lazy dog",
      10,
    )
    expect(actual).toEqual([
      "the quick",
      "brown fox",
      "jumps over",
      "the lazy",
      "dog",
    ])
  })
})
