import { findWordInGrid } from "./findWordInGrid"

describe("findWordInGrid function", () => {
  it("should work", () => {
    const grid = [
      ["F", "A", "C", "I"],
      ["O", "B", "Q", "P"],
      ["A", "N", "O", "B"],
      ["M", "A", "S", "S"],
    ]

    const actual1 = findWordInGrid(grid, "FOAM")
    expect(actual1).toBe(true)

    const actual2 = findWordInGrid(grid, "MASS")
    expect(actual2).toBe(true)
  })
})
