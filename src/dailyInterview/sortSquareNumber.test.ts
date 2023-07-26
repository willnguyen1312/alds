import { sortSquareNumber } from "./sortSquareNumber"

describe("sortSquareNumber function", () => {
  it("should work", () => {
    const actual = sortSquareNumber([-5, -3, -1, 0, 1, 4, 5])
    expect(actual).toEqual([0, 1, 1, 9, 16, 25, 25])
  })
})
