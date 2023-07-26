import { whoWins } from "./whoWins"

describe("whoWins function", () => {
  it("should work", () => {
    const actual = whoWins([1, 2, 3])
    expect(actual).toBe(1)
  })
})
