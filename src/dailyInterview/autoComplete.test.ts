import { Trie } from "./autoComplete"

describe("Trie autocomplete class", () => {
  it("should work", () => {
    const trie = new Trie(["dog", "dark", "cat", "door", "dodge"])
    const actual = trie.suggest("do")
    expect(actual).toEqual(["dog", "door", "dodge"])
  })
})
