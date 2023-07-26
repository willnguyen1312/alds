import { optimizeListSum } from "./optimizeListSum"

describe("optimizeListSum function", () => {
  it("should work", () => {
    const fastSumFunc = optimizeListSum([1, 2, 3, 4, 5, 6, 7])
    expect(fastSumFunc(2, 5)).toBe(12)
  })
})
