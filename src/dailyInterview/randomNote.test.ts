import { randomNote } from "./randomNote"

describe("randomNote function", () => {
  it("should work", () => {
    const actual1 = randomNote(["a", "b", "c", "d", "e", "f"], "bed")
    expect(actual1).toBe(true)
    const actual2 = randomNote(["a", "b", "c", "d", "e", "f"], "cat")
    expect(actual2).toBe(false)
  })
})
