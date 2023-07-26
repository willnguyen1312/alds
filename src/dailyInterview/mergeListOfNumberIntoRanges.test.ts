import { mergeListOfNumberIntoRanges } from "./mergeListOfNumberIntoRanges"

describe("mergeListOfNumberIntoRanges function", () => {
  it("should work", () => {
    expect(
      mergeListOfNumberIntoRanges([0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]),
    ).toEqual(["0->2", "5->5", "7->11", "15->15"])
  })
})
