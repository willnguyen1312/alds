import { PrefixMapSum } from './prefixMapSum';

describe('PrefixMapSum class', () => {
  it('should work', () => {
    const prefixMapSum = new PrefixMapSum();
    prefixMapSum.insert('bag', 4);
    prefixMapSum.insert('bath', 5);

    expect(prefixMapSum).toMatchInlineSnapshot(`
PrefixMapSum {
  "insert": [Function],
  "map": Object {
    "bag": 4,
    "bath": 5,
  },
  "sum": [Function],
  "trie": TrieNode {
    "letters": Object {
      "b": TrieNode {
        "letters": Object {
          "a": TrieNode {
            "letters": Object {
              "g": TrieNode {
                "letters": Object {},
                "total": 4,
              },
              "t": TrieNode {
                "letters": Object {
                  "h": TrieNode {
                    "letters": Object {},
                    "total": 5,
                  },
                },
                "total": 5,
              },
            },
            "total": 9,
          },
        },
        "total": 9,
      },
    },
    "total": 0,
  },
}
`);
  });
});
