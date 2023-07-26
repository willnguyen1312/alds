import { longestConsecutiveSubSequence } from "./longestConsecutiveSubSequence"

describe("longestConsecutiveSubSequence function", () => {
  it("should work", () => {
    expect(longestConsecutiveSubSequence([100, 4, 200, 1, 3, 2])).toBe(4)
  })
})
