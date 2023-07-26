import { multiTasking } from "./multiTasking"

describe("multiTasking function", () => {
  it("should work", () => {
    expect(multiTasking([1, 1, 2, 1], 2)).toBe(7)
  })
})
