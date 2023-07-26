import { compareKeyStrokes } from "./compareKeyStrokes"

describe("compareKeyStrokes function", () => {
  it("should work", () => {
    const actual = compareKeyStrokes("ABC#", "CD##AB")
    expect(actual).toBe(true)
  })
})
