import { maxSlidingWindow } from "./maxSlidingWindow"

describe("maxSlidingWindow function", () => {
  it("should work", () => {
    expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([
      3, 3, 5, 5, 6, 7,
    ])
  })
})
