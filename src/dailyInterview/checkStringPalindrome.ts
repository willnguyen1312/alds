/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given a string, determine if there is a way to arrange the string such that the string is a palindrome.
If such arrangement exists, return a palindrome (There could be many arrangements).
Otherwise return None.
*/

export function checkStringPalindrome(str: string): string {
  const counting: Record<string, number> = {}
  for (const ch of str) {
    counting[ch] = (counting[ch] || 0) + 1
  }

  let oddCount = 0
  let oddChar = ""

  for (const [key, value] of Object.entries(counting)) {
    if (value % 2) {
      oddCount++
      oddChar = key
    }
  }

  if (oddCount > 1) {
    return ""
  }

  let firstHalf = ""
  let secondHalf = ""
  for (const [key, value] of Object.entries(counting)) {
    let tempStr = ""
    for (let i = 0; i < Math.floor(value / 2); i++) {
      tempStr += key
    }

    firstHalf = firstHalf + tempStr
    secondHalf = tempStr + secondHalf
  }

  return oddCount === 1
    ? firstHalf + oddChar + secondHalf
    : firstHalf + secondHalf
}
