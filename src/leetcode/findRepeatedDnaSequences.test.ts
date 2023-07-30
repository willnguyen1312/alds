function findRepeatedDnaSequences(s: string): string[] {
  const lookup = new Map<string, number>()
  const result: string[] = []

  for (let i = 0; i < s.length - 9; i++) {
    const sub = s.slice(i, i + 10)
    const val = (lookup.get(sub) || 0) + 1

    if (val === 2) {
      result.push(sub)
    }

    lookup.set(sub, val)
  }

  return result
}

describe("findRepeatedDnaSequences", () => {
  it("should work as expected", () => {
    expect(
      findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"),
    ).toEqual(["AAAAACCCCC", "CCCCCAAAAA"])
    expect(findRepeatedDnaSequences("AAAAAAAAAAAAA")).toEqual(["AAAAAAAAAA"])
  })
})
