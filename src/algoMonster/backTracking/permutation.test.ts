import { permutation } from "./permutation"

describe("permutation function", () => {
  it("should work", () => {
    expect(permutation("abc")).toEqual([
      "abc",
      "acb",
      "bac",
      "bca",
      "cab",
      "cba",
    ])
  })
})
