import { mazePath } from "./mazePath"

describe("mazePath function", () => {
  it("should work", () => {
    expect(
      mazePath([
        [0, 1, 0],
        [0, 0, 1],
        [0, 0, 0],
      ]),
    ).toBe(2)

    expect(
      mazePath([
        [0, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
      ]),
    ).toBe(4)
  })
})
