import { minStepsFromStartToEnd } from "./minStepsFromStartToEnd"

describe("minStepsFromStartToEnd function", () => {
  it("should work", () => {
    const board = [
      [false, false, false, false],
      [true, true, false, true],
      [false, false, false, false],
      [false, false, false, false],
    ]

    const actual = minStepsFromStartToEnd(board, 3, 0, 0, 0)
    expect(actual).toBe(7)
  })
})
