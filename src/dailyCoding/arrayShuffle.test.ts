import { arrayShuffle } from "./arrayShuffle"

describe("arrayShuffle function", () => {
  it("should work", () => {
    const actual = arrayShuffle([1, 2, 3, 4])
    expect(actual).toEqual([2, 1, 4, 3])
  })
})
