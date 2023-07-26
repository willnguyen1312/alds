import { phoneNumberPermutation } from "./phoneNumberPermutation"

describe("phoneNumberPermutation function", () => {
  it("should work", () => {
    expect(phoneNumberPermutation("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ])
  })
})
