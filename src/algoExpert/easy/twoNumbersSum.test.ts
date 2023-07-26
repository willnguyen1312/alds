import { twoNumbersSum, twoNumbersSum2, twoNumbersSum3 } from "./twoNumbersSum"

describe("twoNumbersSum", () => {
  it("should work for the first case", () => {
    expect(twoNumbersSum([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([11, -1])

    expect(twoNumbersSum3([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([11, -1])

    expect(twoNumbersSum2([3, 5, -4, 8, 11, 1, -1, 6], 10)).toEqual([-1, 11])
  })
})
