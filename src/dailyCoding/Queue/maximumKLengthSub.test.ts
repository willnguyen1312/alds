import { maximumKLengthSub } from "./maximumKLengthSub"

describe("Name of the group function", () => {
  it("should work", () => {
    const actual = maximumKLengthSub([10, 5, 2, 7, 8, 7], 3)
    expect(actual).toEqual([10, 7, 8, 8])
  })
})
