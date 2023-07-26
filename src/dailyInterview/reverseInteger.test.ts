import { reverseInteger } from "./reverseInteger"

describe("reverseInteger function", () => {
  it("should work", () => {
    const actual = reverseInteger(456)
    expect(actual).toBe(654)
  })
})
