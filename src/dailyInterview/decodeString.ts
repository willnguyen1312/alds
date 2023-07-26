/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a string with a certain rule: k[string] should be expanded to string k times.
So for example, 3[abc] should be expanded to abcabcabc. Nested expansions can happen, so 2[a2[b]c]
should be expanded to abbcabbc.
*/

export function decodeString(str: string): string {
  const integerStack = []
  const stringStack = []

  let temp = ""
  let result = ""
  let i = 0

  while (i < str.length) {
    let count = 0

    if (Number.isFinite(+str[i])) {
      while (Number.isFinite(+str[i])) {
        count = count * 10 + +str[i]
        i++
      }
      i--
      integerStack.push(count)
    } else if (str[i] === "]") {
      temp = ""
      count = 0

      if (integerStack.length) {
        count = integerStack.pop()
      }

      while (
        stringStack.length &&
        stringStack[stringStack.length - 1] !== "["
      ) {
        temp = stringStack.pop() + temp
      }

      if (stringStack.length && stringStack[stringStack.length - 1] === "[") {
        stringStack.pop()
      }

      result = temp.repeat(count)
      stringStack.push(result)

      result = ""
    } else if (str[i] === "[") {
      if (Number.isFinite(+str[i - 1])) {
        stringStack.push(str[i])
      } else {
        stringStack.push(str[i])
        integerStack.push(1)
      }
    } else {
      stringStack.push(str[i])
    }

    i++
  }

  while (stringStack.length) {
    result = stringStack[stringStack.length - 1] + result
    stringStack.pop()
  }

  return result
}
