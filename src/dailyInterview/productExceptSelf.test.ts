import { productExceptSelf } from "./productExceptSelf"

describe("productExceptSelf function", () => {
  it("should work", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6])
  })
})
