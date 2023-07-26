import { stringPermutation } from "./stringPermutation"

describe("stringPermutation function", () => {
  it("should work", () => {
    const actual = stringPermutation("c7w2")
    expect(actual).toEqual(["C7W2", "C7w2", "c7W2", "c7w2"])
  })
})
