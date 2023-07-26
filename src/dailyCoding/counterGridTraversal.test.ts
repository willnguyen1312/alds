import { counterGridTraversal } from "./counterGridTraversal"

describe("counterGridTraversal function", () => {
  it("should work", () => {
    expect(
      counterGridTraversal([
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
      ]),
    ).toEqual([
      1, 6, 11, 16, 17, 18, 19, 20, 15, 10, 5, 4, 3, 2, 7, 12, 13, 14, 9, 8,
    ])
  })
})
