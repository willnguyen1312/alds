import { majorityElement } from "./majorityElement"

describe("majorityElement function", () => {
  it("should work", () => {
    const actual = majorityElement([3, 5, 3, 3, 2, 4, 3])
    expect(actual).toBe(3)
  })
})
