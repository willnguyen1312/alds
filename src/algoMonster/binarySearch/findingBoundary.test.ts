import { findingBoundary } from "./findingBoundary"

describe("findingBoundary function", () => {
  it("should work", () => {
    expect(findingBoundary([false, false, true, true])).toBe(2)
  })
})
