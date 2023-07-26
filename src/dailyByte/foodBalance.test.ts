import { foodBalance } from "./foodBalance"

describe("foodBalance function", () => {
  it("should work", () => {
    const actual1 = foodBalance("FDFDFD")
    expect(actual1).toBe(3)

    const actual2 = foodBalance("FDFFDFDD")
    expect(actual2).toBe(2)
  })
})
