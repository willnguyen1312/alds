import { mergeOverlappingIntervals } from "./mergeOverlappingIntervals"

describe("mergeOverlappingIntervals function", () => {
  it("should work", () => {
    expect(
      mergeOverlappingIntervals([
        [1, 3],
        [5, 8],
        [4, 10],
        [20, 25],
      ]),
    ).toEqual([
      [1, 3],
      [4, 10],
      [20, 25],
    ])
  })
})
