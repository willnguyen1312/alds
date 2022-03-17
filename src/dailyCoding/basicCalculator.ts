/**
 * @param {string} s
 * @return {number}
 */
export function calculate(s: string): number {
  if (s.length === 0) return;

  let stack = [];
  let operation = 1;
  let currentNum = 0;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];

    if (currentChar === ' ') continue;

    if (!isNaN(+currentChar)) {
      currentNum = currentNum * 10 + Number(currentChar);
    } else if (currentChar === '+') {
      result += operation * currentNum;
      operation = 1;
      currentNum = 0;
    } else if (currentChar === '-') {
      result += operation * currentNum;
      operation = -1;
      currentNum = 0;
    } else if (currentChar === '(') {
      stack.push(result);
      stack.push(operation);
      operation = 1;
      result = 0;
    } else if (currentChar === ')') {
      result += operation * currentNum;
      result *= stack.pop();
      result += stack.pop();
      currentNum = 0;
    }
  }

  return result + operation * currentNum;
}
