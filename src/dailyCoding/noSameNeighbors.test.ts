import { noSameNeighbors } from "./noSameNeighbors"

describe("noSameNeighbors function", () => {
  it("should work", () => {
    const actual1 = noSameNeighbors("abb")
    expect(actual1).toBe("bab")

    const actual2 = noSameNeighbors("xxxy")
    expect(actual2).toBe("")
  })
})
