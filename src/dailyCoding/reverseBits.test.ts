import { reverseBits } from "./reverseBits"

describe("reverseBits function", () => {
  it("should work", () => {
    const actual1 = reverseBits(11)
    expect(actual1).toBe(13)

    const actual2 = reverseBits(10)
    expect(actual2).toBe(5)
  })
})
