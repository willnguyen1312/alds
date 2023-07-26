import { heightChecker } from "./heightChecker"

describe("heightChecker", () => {
  it("should work for the first case", () => {
    expect(heightChecker([1, 1, 4, 2, 1, 3])).toBe(3)
  })
})
