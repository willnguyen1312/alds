class TrieNode {
  letters: Record<string, TrieNode> = {}
  total: number = 0
}

export class PrefixMapSum {
  trie = new TrieNode()
  map: Record<string, number> = {}

  insert = (key: string, value: number) => {
    // If the key already exists, increment prefix totals by
    // the difference of old and new values.
    value -= this.map[key] || 0
    this.map[key] = value

    let trie = this.trie
    for (const char of key) {
      if (!trie.letters[char]) {
        trie.letters[char] = new TrieNode()
      }
      trie = trie.letters[char]
      trie.total += value
    }
  }

  sum = (prefix: string) => {
    let trie = this.trie

    for (const char of prefix) {
      if (trie.letters[char]) {
        trie = trie.letters[char]
      } else {
        return 0
      }
    }

    return trie.total
  }
}
