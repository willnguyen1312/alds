import { PrefixMapSum } from './prefixMapSum';

describe('PrefixMapSum class', () => {
  it('should work', () => {
    const prefixMapSum = new PrefixMapSum();
    prefixMapSum.insert('bag', 4);
    prefixMapSum.insert('bath', 5);

    expect(prefixMapSum).toMatchInlineSnapshot(`
      PrefixMapSum {
        "insert": [Function],
        "map": {
          "bag": 4,
          "bath": 5,
        },
        "sum": [Function],
        "trie": TrieNode {
          "letters": {
            "b": TrieNode {
              "letters": {
                "a": TrieNode {
                  "letters": {
                    "g": TrieNode {
                      "letters": {},
                      "total": 4,
                    },
                    "t": TrieNode {
                      "letters": {
                        "h": TrieNode {
                          "letters": {},
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
