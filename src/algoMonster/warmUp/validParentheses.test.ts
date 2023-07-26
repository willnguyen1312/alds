import { validParentheses } from "./validParentheses"

describe("validParentheses function", () => {
  it("should work", () => {
    expect(validParentheses("()")).toBe(true)
    expect(validParentheses("(}")).toBe(false)
  })
})
