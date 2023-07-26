import { closestSum } from "./closestSum"

describe("closestSum function", () => {
  it("should work", () => {
    const actual = closestSum([2, 1, -5, 4], -1)
    expect(actual).toEqual([-5, 1, 4])
  })
})
