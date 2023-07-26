import { removeOneLayerOfParenThesis } from "./removeOneLayerOfParenThesis"

describe("removeOneLayerOfParenThesis function", () => {
  it("should work", () => {
    const actual1 = removeOneLayerOfParenThesis("(())()")
    expect(actual1).toBe("()")
    const actual2 = removeOneLayerOfParenThesis("(()())")
    expect(actual2).toBe("()()")
    const actual3 = removeOneLayerOfParenThesis("()()()")
    expect(actual3).toBe("")
  })
})
