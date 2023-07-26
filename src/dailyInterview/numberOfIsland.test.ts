import { numberOfIslands } from "./numberOfIslands"

describe("numberOfIslands function", () => {
  it("should work", () => {
    expect(
      numberOfIslands([
        [1, 1, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [1, 0, 0, 1, 1],
        [0, 0, 0, 0, 0],
      ]),
    ).toBe(3)
  })
})
