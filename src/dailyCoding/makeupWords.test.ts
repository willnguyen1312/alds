import { makeupWords } from "./makeupWords"

describe("makeupWords function", () => {
  it("should work", () => {
    const actual = makeupWords("thequickbrownfox", [
      "quick",
      "brown",
      "the",
      "fox",
    ])
    expect(actual).toEqual(["the", "quick", "brown", "fox"])

    const actual3 = makeupWords("bedbathandbeyond", [
      "bed",
      "bedbath",
      "and",
      "beyond",
    ])
    expect(actual3).toEqual(["bedbath", "and", "beyond"])
  })
})
