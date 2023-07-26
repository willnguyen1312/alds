import { removeDuplicates } from "./removeDuplicates"

describe("removeDuplicates function", () => {
  it("should work", () => {
    expect(removeDuplicates([1, 1, 2, 2, 3, 3])).toEqual([1, 2, 3])
  })
})
