import { noneDecreasingByModOne } from "./noneDecreasingByModOne"

describe("noneDecreasingByModOne function", () => {
  it("should work", () => {
    const actual1 = noneDecreasingByModOne([10, 5, 7])
    expect(actual1).toBe(true)

    const actual2 = noneDecreasingByModOne([10, 5, 1])
    expect(actual2).toBe(false)
  })
})
