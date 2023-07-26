import { partitionIntoTwoSubset } from "./partitionIntoTwoSubset"

describe("partitionIntoTwoSubset function", () => {
  it("should work", () => {
    const actual = partitionIntoTwoSubset([3, 1, 1, 2, 2, 1])
    expect(actual).toBe(true)
  })
})
