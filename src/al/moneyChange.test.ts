import { moneyChange, moneyChange2 } from "./moneyChange"

describe("moneyChange function", () => {
  it("should work", () => {
    const actual = moneyChange([1, 5, 12, 19], 16)
    expect(actual).toBe(4)
    const actual2 = moneyChange2([1, 5, 12, 19], 16)
    expect(actual2).toBe(4)
  })
})
