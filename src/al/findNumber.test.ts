import { findNumbers } from "./findNumber"

describe("findNumber", () => {
  it("should work for the first case", () => {
    expect(findNumbers([12, 345, 2, 6, 7896])).toBe(2)
  })

  it("should work for the second case", () => {
    expect(findNumbers([555, 901, 482, 1771])).toBe(1)
  })
})
