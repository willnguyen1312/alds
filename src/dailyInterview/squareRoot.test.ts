import { squareRoot } from "./squareRoot"

describe("squareRoot function", () => {
  it("should work", () => {
    const actual = squareRoot(5)
    expect(actual).toBe(2.236)
  })
})
