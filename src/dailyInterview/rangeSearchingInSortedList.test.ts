import { rangeSearchingInSortedList } from "./rangeSearchingInSortedList"

describe("rangeSearchingInSortedList function", () => {
  it("should work", () => {
    const actual1 = rangeSearchingInSortedList([1, 1, 3, 5, 7], 1)
    expect(actual1).toEqual([0, 1])
    const actual2 = rangeSearchingInSortedList([1, 2, 3, 4], 5)
    expect(actual2).toEqual([-1, -1])
  })
})
