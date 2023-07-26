import { climbStairsIter, climbStairsRecur } from "./climbStairs"

describe("climbStairs function", () => {
  it("should work", () => {
    expect(climbStairsIter(4)).toBe(5)

    expect(climbStairsRecur(5)).toBe(8)
  })
})
