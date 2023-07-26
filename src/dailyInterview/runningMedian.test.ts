import { runningMedian } from "./runningMedian"

describe("runningMedian function", () => {
  it("should work", () => {
    expect(runningMedian([2, 1, 4, 7, 2, 0, 5])).toEqual([
      2, 1.5, 2, 3.0, 2, 2, 2,
    ])
  })
})
