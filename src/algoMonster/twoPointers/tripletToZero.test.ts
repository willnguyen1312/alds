import { tripletToZero } from "./tripletToZero"

describe("tripletToZero function", () => {
  it("should work", () => {
    expect(tripletToZero([0, -1, 2, -3, 1])).toEqual([
      [-3, 1, 2],
      [-1, 0, 1],
    ])
  })
})
;``
