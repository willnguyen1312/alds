import { rearrangeElement } from "./rearrangeElement"

describe("rearrangeElement function", () => {
  it("should work", () => {
    const actual = rearrangeElement([3, 7, 0, 5, 0, 2])
    expect(actual).toEqual([3, 7, 5, 2, 0, 0])
  })
})
