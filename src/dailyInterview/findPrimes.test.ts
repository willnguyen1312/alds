import { findPrimes } from "./findPrimes"

describe("findPrimes function", () => {
  it("should work", () => {
    expect(findPrimes(14)).toEqual([2, 3, 5, 7, 11, 13])
  })
})
