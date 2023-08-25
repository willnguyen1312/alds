function removeDuplicateLetters(s: string): string {
  let st = [],
    occurrence = {},
    seen = {}

  for (let i = 0; i < s.length; i++) {
    occurrence[s[i]] = i
  }

  for (let i = 0; i < s.length; i++) {
    if (seen[s[i]]) continue

    while (
      st.length > 0 &&
      s[i] < st[st.length - 1] &&
      occurrence[st[st.length - 1]] > i
    ) {
      let ch = st.pop()
      seen[ch] = false
    }

    seen[s[i]] = true
    st.push(s[i])
  }

  return st.join("")
}

describe("remove duplicate letters", () => {
  test("#1", () => {
    expect(removeDuplicateLetters("cbabc")).toBe("abc")
  })
  test("#2", () => {
    expect(removeDuplicateLetters("cbacdcbc")).toBe("acdb")
  })
})
