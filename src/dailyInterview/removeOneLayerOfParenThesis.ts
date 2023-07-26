/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a valid parenthesis string (with only '(' and ')',
an open parenthesis will always end with a close parenthesis,
and a close parenthesis will never start first), remove the outermost layers
of the parenthesis string and return the new parenthesis string. 

If the string has multiple outer layer parenthesis (ie (())()),
remove all outer layers and construct the new string.
So in the example, the string can be broken down into (()) + ().
By removing both components outer layer we are left with () + '' which is simply (),
thus the answer for that input would be ().
*/

export function removeOneLayerOfParenThesis(str: string): string {
  let result = ""
  let depth = 0
  let start = 0

  for (let i = 0; i < str.length; i++) {
    depth += str[i] === "(" ? 1 : -1
    if (depth === 0) {
      result += str.slice(start + 1, i)
      start = i + 1
    }
  }

  return result
}
