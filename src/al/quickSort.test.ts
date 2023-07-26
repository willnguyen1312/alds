import { quickSortIterative, quickSortRecursive } from "./quickSort"

describe("quickSort", () => {
  it("should work for iterative", () => {
    const input = [2, 1, 8, 3, 5]
    quickSortIterative(input)
    expect(input).toEqual([1, 2, 3, 5, 8])
  })

  it("should work for recursive", () => {
    const input = [2, 1, 8, 3, 5]
    quickSortRecursive(input, 0, input.length - 1)
    expect(input).toEqual([1, 2, 3, 5, 8])
  })
})
