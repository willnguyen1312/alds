import { lookAndSaySequence } from "./lookAndSaySequence"

describe("lookAndSaySequence function", () => {
  it("should work", () => {
    const actual = lookAndSaySequence(4)
    expect(actual).toBe("1211")
  })
})
