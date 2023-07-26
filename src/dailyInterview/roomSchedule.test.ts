import { roomSchedule } from "./roomSchedule"

describe("roomSchedule function", () => {
  it("should work", () => {
    expect(
      roomSchedule([
        [30, 75],
        [0, 50],
        [60, 150],
      ]),
    ).toBe(1)
  })
})
