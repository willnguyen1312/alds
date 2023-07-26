export function findMatchPrefix(str1: string, str2: string) {
  let match = ""
  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    if (str1[i] && str2[i] && str1[i] === str2[i]) {
      match += str1[i]
    } else {
      break
    }
  }
  return match
}

export function findLongestPrefix1(arr: string[]) {
  return arr.reduce((acc, curr, index) => {
    if (index === 0) return curr
    if (curr.length < acc.length) return acc

    const findMatch = findMatchPrefix(acc, curr)
    if (findMatch) {
      return findMatch
    } else {
      return acc
    }
  }, "")
}

function commonPrefixUtil(str1: string, str2: string): string {
  let result = ""
  let n1 = str1.length
  let n2 = str2.length

  for (let i = 0, j = 0; i < n1 && j < n2; i++, j++) {
    if (str1[i] !== str2[j]) {
      break
    }
    result += str1[i]
  }

  return result
}

export function findLongestPrefix2(strs: string[]): string {
  const length = strs.length
  let prefix = strs[0]

  for (let i = 1; i < length; i++) {
    prefix = commonPrefixUtil(prefix, strs[i])
  }

  return prefix
}
