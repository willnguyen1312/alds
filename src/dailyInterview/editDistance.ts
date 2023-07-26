/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

Given two strings, determine the edit distance between them. The edit distance is defined as the minimum number of edits (insertion, deletion, or substitution) needed to change one string to the other.

For example, "biting" and "sitting" have an edit distance of 2 (substitute b for s, and insert a t).
*/

export function editDistance(str1: string, str2: string): number {
  const edits: number[][] = []

  for (let i = 0; i < str2.length + 1; i++) {
    const row = []
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j)
    }
    row[0] = i
    edits.push(row)
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1]
      } else {
        edits[i][j] =
          1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1])
      }
    }
  }

  return edits[str2.length][str1.length]
}
