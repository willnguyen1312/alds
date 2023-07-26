import {
  noRepeatingCharacters,
  reArrangeString,
  reArrangeString2,
} from "./noRepeatingCharacters"

describe("noRepeatingCharacters function", () => {
  it("should work", () => {
    expect(noRepeatingCharacters("abbccc")).toBe(true)
    expect(noRepeatingCharacters("abbccccc")).toBe(false)

    expect(reArrangeString("abbccc")).toBe("cacbcb")
    expect(reArrangeString2("abbccc")).toBe("cacbcb")
  })
})
