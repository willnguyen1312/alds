/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Given a string with only ( and ), find the minimum number of characters to add or subtract to fix
the string such that the brackets are balanced.

Example:
Input: '(()()'
Output: 1
Explanation:

The fixed string could either be ()() by deleting the first bracket, or (()()) by adding a bracket.
These are not the only ways of fixing the string, there are many other ways by adding it in different positions!
*/

export function fixBrackets(str: string): number {
  const stack: string[] = []

  for (const char of str) {
    if (char === "(") {
      stack.push(char)
      continue
    }

    if (stack[stack.length - 1] === "(") {
      stack.pop()
      continue
    }

    stack.push(char)
  }

  return stack.length
}
