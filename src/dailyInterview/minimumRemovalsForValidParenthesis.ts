/*
Hi, here's your problem today. This problem was recently asked by Uber:

You are given a string of parenthesis. Return the minimum number of parenthesis that
would need to be removed in order to make the string valid.
"Valid" means that each open parenthesis has a matching closed parenthesis.

Example:

"()())()"

The following input should return 1.

")("
*/

// method to remove invalid parenthesis
export function minimumRemovalsForValidParenthesis(str: string) {
  const stack = [];
  const toRemove = new Set();

  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') {
      stack.push(i);
    } else if (str[i] == ')') {
      if (stack.length === 0) {
        toRemove.add(i);
      } else {
        stack.pop();
      }
    }
  }

  while (stack.length) {
    toRemove.add(stack.pop());
  }

  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!toRemove.has(i)) {
      result += str[i];
    }
  }
  return result;
}
