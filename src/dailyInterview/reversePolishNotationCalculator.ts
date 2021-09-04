/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given an expression (as a list) in reverse polish notation, evaluate the expression.
Reverse polish notation is where the numbers come before the operand.
Note that there can be the 4 operands '+', '-', '*', '/'.
You can also assume the expression will be well formed.

Example
Input: [1, 2, 3, '+', 2, '*', '-']
Output: -9
The equivalent expression of the above reverse polish notation would be (1 - ((2 + 3) * 2)).
*/

export function reversePolishNotationCalculator(
  arr: (number | string)[]
): number {
  const stack: any[] = [];

  for (const item of arr) {
    if (typeof item === 'number') {
      stack.push(item);
      continue;
    }

    if (typeof item === 'string') {
      const second = stack.pop();
      const first = stack.pop();
      if (item === '+') {
        stack.push(first + second);
      }
      if (item === '-') {
        stack.push(first - second);
      }
      if (item === '*') {
        stack.push(first * second);
      }
      if (item === '/') {
        stack.push(first / second);
      }
    }
  }

  return stack[0] as number;
}
