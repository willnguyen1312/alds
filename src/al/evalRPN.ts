const evalRPN = (tokens: string[]) => {
  const operands = new Set(["+", "-", "*", "/"])
  const stack = []

  for (let s of tokens) {
    if (operands.has(s)) {
      const n2 = parseInt(stack.pop())
      const n1 = parseInt(stack.pop())
      stack.push(evaluate(n1, n2, s))
    } else {
      stack.push(s)
    }
  }

  return parseInt(stack.pop())
}

const evaluate = (n1: number, n2: number, operand: string): any => {
  if (operand === "+") return n1 + n2
  if (operand === "-") return n1 - n2
  if (operand === "*") return n1 * n2
  if (operand === "/") return n1 / n2
}

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
