import { keyboardRow } from "./keyboardRow"

describe("keyboardRow function", () => {
  it("should work", () => {
    const actual1 = keyboardRow(["two", "dad", "cat"])
    expect(actual1).toEqual(["two", "dad"])

    const actual2 = keyboardRow(["ufo", "xzy", "byte"])
    expect(actual2).toEqual([])
  })
})
