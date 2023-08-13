export function longestCommonSubsequence(str1: string, str2: string) {
  const lengths: number[][] = []

  for (let i = 0; i < str2.length + 1; i++) {
    lengths.push(new Array(str1.length + 1).fill(0))
  }

  for (let i = 1; i < str2.length + 1; i++) {
    for (let j = 1; j < str1.length + 1; j++) {
      if (str2[i - 1] === str1[j - 1]) {
        lengths[i][j] = lengths[i - 1][j - 1] + 1
      } else {
        lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1])
      }
    }
  }

  return lengths[str2.length][str1.length]
}

describe("longestCommonSubsequence function", () => {
  it("should work", () => {
    const actual = longestCommonSubsequence("abca", "acea")
    expect(actual).toBe(3)
  })
})
