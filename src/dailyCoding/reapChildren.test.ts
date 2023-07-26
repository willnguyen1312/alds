import { reapChildren } from "./reapChildren"

describe("reapChildren function", () => {
  it("should work", () => {
    const actual = reapChildren([2, 4, 3, 7], [0, 2, 2, 3], 3)
    expect(actual).toEqual([3, 7])
  })
})
