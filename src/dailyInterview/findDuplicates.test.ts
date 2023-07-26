import { findDuplicates } from "./findDuplicates"

describe("findDuplicates function", () => {
  it("should work", () => {
    const actual = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])
    expect(actual).toEqual([2, 3])
  })
})
