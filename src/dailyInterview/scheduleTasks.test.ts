import { scheduleTasks } from "./scheduleTasks"

describe("scheduleTasks function", () => {
  it("should work", () => {
    const actual = scheduleTasks(["q", "q", "w", "w"], 4)
    expect(actual).toBe(7)
  })
})
