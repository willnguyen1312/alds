/*
Hi, here's your problem today. This problem was recently asked by LinkedIn:

Given a string, rearrange the string so that no character next to each other are the same.
If no such arrangement is possible, then return None.

Example:
Input: abbccc
Output: cbcbca
*/

export function noRepeatingCharacters(str: string) {
  const freq = new Map()
  let maxFreq = 0

  for (let j = 0; j < str.length; j++) {
    if (freq.has(str[j])) {
      freq.set(str[j], freq.get(str[j]) + 1)

      if (freq.get(str[j]) > maxFreq) {
        maxFreq = freq.get(str[j])
      }
    } else {
      freq.set(str[j], 1)
      if (freq.get(str[j]) > maxFreq) {
        maxFreq = freq.get(str[j])
      }
    }
  }

  if (maxFreq <= str.length - maxFreq + 1) {
    return true
  }

  return false
}

export function reArrangeString(str: string): string {
  const length = str.length
  const count: number[] = Array.from({ length: 26 }, () => 0)

  for (let index = 0; index < str.length; index++) {
    const element = str[index]
    count[element.charCodeAt(0) - "a".charCodeAt(0)]++
  }

  let maxCount = Math.max(...count)
  const maxCountChar = String.fromCharCode("a".charCodeAt(0) + maxCount - 1)
  let result = Array.from({ length }, () => "")

  let idx = 0
  let countIdx = maxCount

  // Fill the even
  while (countIdx) {
    result[idx] = maxCountChar
    idx += 2
    countIdx--
  }

  count[maxCount - 1] = 0

  // First, fill the even positions and then the odd positions
  for (let i = 0; i < 26; i++) {
    while (count[i] > 0) {
      idx = idx >= length ? 1 : idx
      result[idx] = String.fromCharCode("a".charCodeAt(0) + i)
      idx += 2
      count[i]--
    }
  }

  return result.join("")
}

export function reArrangeString2(str: string): string {
  const countMap: Map<string, number> = new Map()
  let currentMax = 0
  let currentMaxChar = ""

  for (const char of str) {
    if (countMap.has(char)) {
      countMap.set(char, countMap.get(char) + 1)
      currentMax = Math.max(countMap.get(char), currentMax)

      if (countMap.get(char) >= currentMax) {
        currentMaxChar = char
      }
    } else {
      countMap.set(char, 1)
      currentMax = Math.max(countMap.get(char), currentMax)
    }
  }

  if (currentMax > str.length - currentMax + 1) {
    return ""
  }

  const result: string[] = Array.from({ length: str.length })
  let index = 0
  while (currentMax) {
    result[index] = currentMaxChar
    index += 2
    currentMax--
  }

  countMap.delete(currentMaxChar)

  for (const item of countMap) {
    let [char, charCount] = item
    while (charCount) {
      index = index >= str.length ? 1 : index
      result[index] = char
      index += 2
      charCount--
    }
  }

  return result.join("")
}
