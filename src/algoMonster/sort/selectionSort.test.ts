import { selectionSort } from "./selectionSort"

describe("selectionSort function", () => {
  it("should work", () => {
    expect(selectionSort([2, 4, 1])).toEqual([1, 2, 4])
  })
})
