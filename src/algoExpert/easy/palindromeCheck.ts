export function palindromeCheckRecur(str: string, i: number): boolean {
  const j = str.length - 1 - i

  return i >= j ? true : str[i] === str[j] && palindromeCheckRecur(str, i + 1)
}

export function palindromeCheck(string: string) {
  let leftIdx = 0
  let rightIdx = string.length - 1

  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false
    leftIdx++
    rightIdx--
  }

  return true
}
