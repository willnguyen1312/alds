import { reverseString } from "./reverseString"

describe("reverseString function", () => {
  it("should work", () => {
    const actual = reverseString("The Daily Byte")
    expect(actual).toBe("etyB yliaD ehT")
  })
})
