import { findDisappearedNumbers } from "./findDisappearedNumbers"

describe("findDisappearedNumbers", () => {
  it("should work for the fist case", () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6])
  })
})
