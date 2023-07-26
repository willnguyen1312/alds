import { duplicateZeros } from "./duplicateZero"

describe("duplicateZero", () => {
  it("should work for the first case", () => {
    const input = [1, 0, 2, 3, 0, 4, 5, 0]

    duplicateZeros(input)
    expect(input).toEqual([1, 0, 0, 2, 3, 0, 0, 4])
  })

  it("should work for the second case", () => {
    const input = [1, 2, 3]

    duplicateZeros(input)
    expect(input).toEqual([1, 2, 3])
  })
})
