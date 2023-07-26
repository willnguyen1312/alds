import { findSingleElement } from "./findSingleElement"

describe("findSingleElement function", () => {
  it("should work", () => {
    expect(findSingleElement([7, 3, 5, 5, 4, 3, 4, 8, 8])).toBe(7)
  })
})
