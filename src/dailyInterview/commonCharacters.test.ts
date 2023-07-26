import { commonCharacters } from "./commonCharacters"

describe("commonCharacters function", () => {
  it("should work", () => {
    const actual = commonCharacters(["google", "facebook", "youtube"])
    expect(actual).toEqual(["e", "o"])
  })
})
