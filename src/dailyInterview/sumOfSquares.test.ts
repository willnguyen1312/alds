import { sumOfSquares } from "./sumOfSquares"

describe("sumOfSquares function", () => {
  it("should work", () => {
    const actual = sumOfSquares(13)
    expect(actual).toBe(2)
  })
})
