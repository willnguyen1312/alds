import { findFirstOccurrence } from "./findFirstOccurrence"

describe("findFirstOccurrence function", () => {
  it("should work", () => {
    expect(findFirstOccurrence([1, 2, 3, 4, 4, 4, 4, 5, 6], 4)).toEqual(3)
  })
})
