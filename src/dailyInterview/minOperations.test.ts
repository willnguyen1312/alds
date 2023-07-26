import { minOperations, minOperations2 } from "./minOperations"

describe("minOperation function", () => {
  it("should work", () => {
    const actual1 = minOperations2(5)
    expect(actual1).toBe(3)

    const actual2 = minOperations(6, 20)
    expect(actual2).toBe(3)
  })
})
