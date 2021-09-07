/*
Hi, here's your problem today. This problem was recently asked by Twitter:

Find all words that are concatenations of a list.

Input:
["tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"]

Output:
['techlead', 'catsdog']
*/

export function concatenatedWords(words: string[]): string[] {
  const wordCache = new Map();
  const concatCache = new Map();
  const res: string[] = [];

  for (let i = 0; i < words.length; i++) {
    wordCache.set(words[i], 1);
  }

  for (let i = 0; i < words.length; i++) {
    if (checkCanConcat(words[i], wordCache, concatCache)) res.push(words[i]);
  }

  return res;
}

function checkCanConcat(
  word: string,
  wordCache: Map<string, number>,
  concatCache: Map<string, boolean>
) {
  if (concatCache.has(word)) return concatCache.get(word);

  for (let i = 1; i < word.length; i++) {
    let prefix = word.slice(0, i);
    let suffix = word.slice(i);
    if (
      wordCache.has(prefix) &&
      (wordCache.has(suffix) || checkCanConcat(suffix, wordCache, concatCache))
    ) {
      concatCache.set(word, true);
      return true;
    }
  }

  concatCache.set(word, false);
  return false;
}
