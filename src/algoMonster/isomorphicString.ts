// Given two strings, determine if they are isomorphic. Two strings are "isomorphic"
// if each unique character from the first string can be replaced to match the second string,
// without changing the ordering of the characters.

export function isomorphicString(first: string, second: string): boolean {
  const charMap: Map<string, string> = new Map();
  const usedFromSecond: Set<string> = new Set();

  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    const firstChar = first[i];
    const secondChar = second[i];

    if (charMap.has(firstChar)) {
      if (charMap.get(firstChar) !== secondChar) {
        return false;
      }
    } else {
      if (usedFromSecond.has(secondChar)) {
        return false;
      }

      charMap.set(firstChar, secondChar);
      usedFromSecond.add(secondChar);
    }
  }

  return true;
}
