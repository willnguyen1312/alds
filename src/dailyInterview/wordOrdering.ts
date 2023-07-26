/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given a list of words, and an arbitrary alphabetical order,
verify that the words are in order of the alphabetical order.

Example:
Input:
words = ["abcd", "efgh"], order="zyxwvutsrqponmlkjihgfedcba"

Output: False
Explanation: 'e' comes before 'a' so 'efgh' should come before 'abcd'

Example 2:
Input:
words = ["zyx", "zyxw", "zyxwy"],
order="zyxwvutsrqponmlkjihgfedcba"
Explanation: The words are in increasing alphabetical order

Output: True

Explanation: 'e' comes before 'a' so 'efgh' should come before 'abcd'
*/

export function wordOrdering(words: string[], order: string): boolean {
  const lookup = order
    .split("")
    .reduce((acc: Record<string, number>, cur, index) => {
      return Object.assign(acc, {
        [cur]: index,
      })
    }, {})

  for (let i = 1; i < words.length; i++) {
    const cur = words[i]
    const prev = words[i - 1]

    for (let j = 0; j < Math.min(cur.length, prev.length); j++) {
      if (lookup[prev[j]] > lookup[cur[j]]) {
        return false
      }
    }
  }

  return true
}
