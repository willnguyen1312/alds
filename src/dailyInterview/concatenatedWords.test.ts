import { concatenatedWords } from "./concatenatedWords"

describe("concatenatedWords function", () => {
  it("should work", () => {
    const actual = concatenatedWords([
      "tech",
      "lead",
      "techlead",
      "cat",
      "cats",
      "dog",
      "catsdog",
    ])
    expect(actual).toEqual(["techlead", "catsdog"])
  })
})
