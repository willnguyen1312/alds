import { mergeKSortedArrays } from "./mergeKSortedArrays"

describe("mergeKSortedArrays function", () => {
  it("should work", () => {
    const arr = [
      [2, 6, 12, 34],
      [1, 9, 20, 1000],
      [23, 34, 90, 2000],
    ]

    expect(mergeKSortedArrays(arr)).toEqual([
      1, 2, 6, 9, 12, 20, 23, 34, 34, 90, 1000, 2000,
    ])
  })
})
