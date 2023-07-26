import { quickSort } from "./quickSort"

describe("quickSort function", () => {
  it("should work", () => {
    expect(quickSort([6, 5, 4, 3])).toEqual([3, 4, 5, 6])
  })
})
