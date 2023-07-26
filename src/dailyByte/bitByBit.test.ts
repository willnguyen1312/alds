import { bitByBit } from "./bitByBit"

describe("bitByBit function", () => {
  it("should work", () => {
    expect(bitByBit([4, 5, 5, 1, 3, 9])).toEqual([1, 4, 3, 5, 5, 9])
    expect(bitByBit([5, 2, 8])).toEqual([2, 8, 5])
  })
})
