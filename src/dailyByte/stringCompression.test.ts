import { stringCompression } from "./stringCompression"

describe("stringCompression function", () => {
  it("should work", () => {
    const actual1 = stringCompression(["a", "a", "a", "a", "a", "a"])
    expect(actual1).toBe(2)

    const actual2 = stringCompression(["a", "a", "b", "b", "c", "c"])
    expect(actual2).toBe(6)

    const actual3 = stringCompression(["a", "b", "c"])
    expect(actual3).toBe(6)
  })
})
