import { sortNums, sortNumbsCount } from "./sortOneTwoThreeArray"

describe("sortNums", () => {
  it("should work", () => {
    const input = [3, 3, 2, 1, 3, 2, 1]
    const actual = sortNums(input)
    const expected = [1, 1, 2, 2, 3, 3, 3]

    expect(actual).toEqual(expected)
  })
})

describe("sortNumbsCount", () => {
  it("should work", () => {
    const input = [3, 3, 2, 1, 3, 2, 1]
    const actual = sortNumbsCount(input)
    const expected = [1, 1, 2, 2, 3, 3, 3]

    expect(actual).toEqual(expected)
  })
})
