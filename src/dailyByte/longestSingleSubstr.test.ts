import { longestSingleSubstr } from "./longestSingleSubstr"

describe("lowestCommonAncestor function", () => {
  it("should work", () => {
    expect(longestSingleSubstr("aabc")).toEqual(2)
    expect(longestSingleSubstr("abcabbccabccc")).toEqual(3)
  })
})
