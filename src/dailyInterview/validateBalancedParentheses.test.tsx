import { validateBalancedParentheses } from "./validateBalancedParentheses"

describe("validateBalancedParentheses function", () => {
  it("should work", () => {
    expect(validateBalancedParentheses("((()))")).toBe(true)

    expect(validateBalancedParentheses("({[)]")).toBe(false)
  })
})
