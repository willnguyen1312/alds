/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given a file path with folder names, '..' (Parent directory), and '.' (Current directory), return the shortest possible file path (Eliminate all the '..' and '.').

Example
Input: '/Users/John/Documents/../Desktop/./../'
Output: '/Users/John/'
*/

export function getShortPath(str: string): string {
  const paths = str.split("/").filter((char) => char !== "" && char !== ".")

  const stack: string[] = []

  for (let index = 0; index < paths.length; index++) {
    const element = paths[index]

    if (element === "..") {
      stack.pop()
      continue
    }

    stack.push(element)
  }

  let result = ""

  while (stack.length) {
    result = stack.pop() + "/" + result
  }

  return "/" + result
}
