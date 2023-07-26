/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

An IP Address is in the format of A.B.C.D, where A, B, C, D are all integers between 0 to 255.

Given a string of numbers, return the possible IP addresses
you can make with that string by splitting into 4 parts of A, B, C, D.

Keep in mind that integers can't start with a 0! (Except for 0)

Example:
Input: 1592551013
Output: ['159.255.101.3', '159.255.10.13']
*/

export function generateIPAddresses(str: string): string[] {
  const result: string[] = []
  const length = str.length

  for (let i = 1; i < length && i < 4; i++) {
    const first = str.slice(0, i)
    if (!checkValidPart(first)) {
      continue
    }

    for (let j = 1; i + j < length && j < 4; j++) {
      const second = str.slice(i, i + j)
      if (!checkValidPart(second)) {
        continue
      }

      for (let k = 1; i + j + k < length && k < 4; k++) {
        const third = str.slice(i + j, i + j + k)
        const fourth = str.slice(i + j + k)
        if (!checkValidPart(third) || !checkValidPart(fourth)) {
          continue
        }

        result.push(`${first}.${second}.${third}.${fourth}`)
      }
    }
  }

  return result
}

function checkValidPart(str: string) {
  if (str.length > 3) {
    return false
  }

  if (str[0] === "0" && str.length > 1) {
    return false
  }

  return +str >= 0 && +str <= 255
}
