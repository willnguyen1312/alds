import { numWaysOfChangeMoney } from "./numWaysOfChangeMoney"

describe("numWaysOfChangeMoney fucntion", () => {
  it("should work", () => {
    const actual = numWaysOfChangeMoney([1, 2, 3], 4)
    expect(actual).toBe(4)
  })
})
