import { connectedComponents } from "./connectedComponents"

describe("connectedComponents function", () => {
  it("should work", () => {
    const actual = connectedComponents([
      [1, 2],
      [2, 3],
      [4, 1],
      [5, 6],
    ])

    expect(actual).toBe(2)
  })
})
