import { greaterElement } from "./greaterElement"

describe("greaterElement function", () => {
  it("should work", () => {
    const actual = greaterElement([4, 1, 2], [1, 3, 4, 2])
    expect(actual).toEqual([-1, 3, -1])
  })
})
