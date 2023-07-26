import { contiguousElements } from "./contiguousElements"

describe("contiguousElements function", () => {
  it("should work", () => {
    const actual = contiguousElements([1, 2, 3, 4, 5], 9)
    expect(actual).toEqual([2, 3, 4])
  })
})
