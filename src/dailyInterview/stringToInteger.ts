/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

Given a string, convert it to an integer without using the builtin str function.
You are allowed to use ord to convert a character to ASCII code.

Consider all possible cases of an integer. In the case where the string is not a valid integer,
return None.
*/

export function stringToInteger(str: string): number {
  let result = 0
  let factor = 0

  for (let index = str.length - 1; index >= 0; index--) {
    const element = str[index]

    if (element === "-") {
      return -result
    }

    result += convertToNumber(element) * Math.pow(10, factor)
    factor++
  }

  return result
}

function convertToNumber(char: string): number {
  return char.charCodeAt(0) - "1".charCodeAt(0) + 1
}
