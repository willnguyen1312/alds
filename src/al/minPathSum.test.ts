import { minPathSum } from "./minPathSum"

describe("minPathSum", () => {
  it("should work", () => {
    const grid = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ]
    const actual = minPathSum(grid)
    expect(actual).toBe(7)
  })
})
