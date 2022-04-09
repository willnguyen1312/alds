// Given a list of strings, return a list of string lists that groups all anagrams together.
// Two strings are anagrams if rearranging one string results in another. For the purpose of this question,
// a string is an anagram of itself.

// Each group of anagrams should be in alphabetical order.
// The output should be in alphabetical order by the first elements of each group of anagrams.

export function groupAnagrams(input: string[]): string[][] {
  const lookup: Map<string, string[]> = new Map();

  for (const str of input) {
    const sorted = str.split('').sort().join('');
    if (lookup.has(sorted)) {
      lookup.set(sorted, lookup.get(sorted).concat(str));
    } else {
      lookup.set(sorted, [str]);
    }
  }

  return Array.from(lookup.values());
}
