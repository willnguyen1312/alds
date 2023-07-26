import { wordSearch } from "./wordSearch"

describe("wordSearch function", () => {
  it("should work", () => {
    const input = [
      ["F", "A", "C", "I"],
      ["O", "B", "Q", "P"],
      ["A", "N", "O", "B"],
      ["M", "A", "S", "S"],
    ]

    expect(wordSearch(input, "FOAM")).toBe(true)
  })
})
