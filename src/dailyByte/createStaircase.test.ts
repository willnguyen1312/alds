import { createStaircase } from "./createStaircase"

describe("createStaircase function", () => {
  it("should work", () => {
    expect(createStaircase(3)).toBe(2)
  })
})
