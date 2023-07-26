import { anagramIndices } from "./anagramIndices"

describe("anagramIndices function", () => {
  it("should work", () => {
    const actual = anagramIndices("ab", "abxaba")
    expect(actual).toEqual([0, 3, 4])
  })
})
