import { jumpToTheEnd } from "./jumpToTheEnd"

describe("jumpToTheEnd function", () => {
  it("should work", () => {
    expect(jumpToTheEnd([3, 2, 5, 1, 1, 9, 3, 4])).toBe(2)
  })
})
