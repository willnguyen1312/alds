import { uniqueCombinationChange } from "./uniqueCombinationChange"

describe("uniqueCombinationChange function", () => {
  it("should work", () => {
    const actual = uniqueCombinationChange([2, 4, 6, 3], 6)
    expect(actual).toEqual([[2, 2, 2], [2, 4], [6], [3, 3]])
  })
})
