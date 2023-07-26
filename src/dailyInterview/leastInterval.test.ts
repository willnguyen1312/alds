import { leastInterval } from "./leastInterval"

describe("leastInterval function", () => {
  it("should work", () => {
    expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8)
  })
})
