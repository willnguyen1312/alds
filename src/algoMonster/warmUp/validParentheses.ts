// For this question we ask you to determine whether or not a string has valid parentheses.
// A string has valid parentheses if each bracket is closed and opened in the same order
// and has the same type.
// Parentheses has 3 types (), {} and []

export function validParentheses(input: string): boolean {
  const lookup: Map<string, string> = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ])

  const stack: string[] = []

  for (const char of input) {
    if (lookup.has(char)) {
      const last = stack.pop()
      if (last !== lookup.get(char)) {
        return false
      }
    } else {
      stack.push(char)
    }
  }

  return stack.length === 0
}
