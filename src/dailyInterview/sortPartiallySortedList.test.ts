import { sortPartiallySortedList } from "./sortPartiallySortedList"

describe("sortPartiallySortedList function", () => {
  it("should work", () => {
    expect(sortPartiallySortedList([3, 2, 6, 5, 4], 2)).toEqual([2, 3, 4, 5, 6])
  })
})
