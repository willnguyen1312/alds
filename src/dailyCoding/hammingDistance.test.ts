import { hammingDistance } from "./hammingDistance"

describe("hammingDistance function", () => {
  it("should work", () => {
    const actual = hammingDistance(2, 4)
    expect(actual).toBe(2)
  })
})
