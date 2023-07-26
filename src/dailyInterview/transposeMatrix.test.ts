import { transposeMatrix } from "./transposeMatrix"

describe("transposeMatrix function", () => {
  it("should work", () => {
    const actual = transposeMatrix([
      [1, 2, 3],
      [4, 5, 6],
    ])

    expect(actual).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ])
  })
})
