import { minimumRemovalsForValidParenthesis } from "./minimumRemovalsForValidParenthesis"

describe("minimumRemovalsForValidParenthesis function", () => {
  it("should work", () => {
    expect(minimumRemovalsForValidParenthesis("()())()")).toBe("()()()")
  })
})
