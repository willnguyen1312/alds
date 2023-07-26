import { removeDuplicateFromSortedList } from "./removeDuplicateFromSortedList"

describe("removeDuplicateFromSortedList function", () => {
  it("should work", () => {
    const actual1 = removeDuplicateFromSortedList([
      1, 1, 2, 3, 4, 4, 4, 4, 4, 5, 5, 6, 7, 9,
    ])
    expect(actual1).toBe(8)

    const actual2 = removeDuplicateFromSortedList([1, 1, 1, 1, 1, 1])
    expect(actual2).toBe(1)
  })
})
