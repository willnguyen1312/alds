import { longestCommonPrefix } from "./longestCommonPrefix"

describe("longestCommonPrefix function", () => {
  it("should work", () => {
    const actual = longestCommonPrefix(["helloworld", "hellokitty", "hell"])
    expect(actual).toBe("hell")
  })
})
