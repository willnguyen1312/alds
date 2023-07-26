import { countIslands } from "./countIslands"

describe("countIslands function", () => {
  it("should work", () => {
    const actual = countIslands([
      [1, 0, 0, 0, 0],
      [0, 0, 1, 1, 0],
      [0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0],
      [1, 1, 0, 0, 1],
      [1, 1, 0, 0, 1],
    ])

    expect(actual).toBe(4)
  })
})
