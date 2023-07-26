import { sumToK } from "./sumToK"

describe("sumToK function", () => {
  it("should work", () => {
    const actual = sumToK([12, 1, 61, 5, 9, 2], 24)
    expect(actual).toEqual([1, 2, 9, 12])
  })
})
