import { maxNoneAdjacentList } from "./maxNoneAdjacentList"

describe("maxNoneAdjacentList function", () => {
  it("should work", () => {
    const actual = maxNoneAdjacentList([3, 4, 1, 1])
    expect(actual).toBe(5)
  })
})
