import { hopToEnd } from "./hopToEnd"

describe("hopToEnd function", () => {
  it("should work", () => {
    const actual1 = hopToEnd([2, 0, 1, 0])
    expect(actual1).toBe(true)

    const actual2 = hopToEnd([1, 1, 0, 1, 1])
    expect(actual2).toBe(false)
  })
})
