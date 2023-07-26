import { flattenDictionary } from "./flattenDictionary"

describe("flattenDictionary function", () => {
  it("should work", () => {
    expect(
      flattenDictionary({
        a: 1,
        b: {
          c: 2,
          d: {
            e: 3,
          },
        },
      }),
    ).toEqual({
      a: 1,
      "b.c": 2,
      "b.d.e": 3,
    })
  })
})
