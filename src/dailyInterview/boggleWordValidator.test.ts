import { boggleWordValidator } from "./boggleWordValidator"

describe("boggleWordValidator function", () => {
  it("should work", () => {
    const board = [
      ["I", "L", "A", "W"],
      ["B", "N", "G", "E"],
      ["I", "U", "A", "O"],
      ["A", "S", "R", "L"],
    ]

    const guess = "BINGO"
    expect(boggleWordValidator(board, guess)).toBe(true)
  })

  it("should work too", () => {
    const board = [
      ["E", "A", "R", "A"],
      ["N", "L", "E", "C"],
      ["I", "A", "I", "S"],
      ["B", "Y", "O", "R"],
    ]

    const guess = "RSCAREIOYBAILNEA"
    expect(boggleWordValidator(board, guess)).toBe(true)
  })
})
