import {
  firstUniqueCharacter,
  firstUniqueCharacter2,
} from "./firstUniqueCharacter"

describe("firstUniqueCharacter function", () => {
  it("should work", () => {
    const actual = firstUniqueCharacter("abcabd")
    expect(actual).toBe(2)
    const actual2 = firstUniqueCharacter2("firstUniqueCharacter2")
    expect(actual2).toBe(0)
  })
})
