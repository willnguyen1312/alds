import { countNumberOfIslands } from "./countNumberOfIslands"

describe("countNumberOfIslands function", () => {
  it("should work", () => {
    const actual = countNumberOfIslands([
      [0, 0, 1, 0, 0],
      [0, 0, 0, 1, 0],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1],
      [0, 0, 0, 1, 0],
    ])

    expect(actual).toBe(4)
  })
})
