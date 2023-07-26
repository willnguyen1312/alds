import { movingBricks } from "./movingBricks"

describe("movingBricks function", () => {
  it("should work", () => {
    const actual = movingBricks([1000, 1000, 1000, 2000], 5000)
    expect(actual).toBe(3)
  })
})
