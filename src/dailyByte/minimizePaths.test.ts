import { minimizePaths } from "./minimizePaths"

describe("minimizePaths function", () => {
  it("should work", () => {
    const actual1 = minimizePaths([
      [1, 1, 3],
      [2, 3, 1],
      [4, 6, 1],
    ])
    expect(actual1).toBe(7)

    const actual2 = minimizePaths([])
    expect(actual2).toBe(0)

    const actual3 = minimizePaths([[1, 2, 3]])
    expect(actual3).toBe(6)

    const actual4 = minimizePaths([[1], [3], [4]])
    expect(actual4).toBe(8)
  })
})
