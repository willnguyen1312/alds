// https://leetcode.com/problems/group-anagrams/
export function groupAnagrams(strs: string[]): string[][] {
  const lookup = new Map<string, string[]>();

  for (const str of strs) {
    const sorted = str.split('').sort().join('');
    if (lookup.has(sorted)) {
      lookup.get(sorted).push(str);
    } else {
      lookup.set(sorted, [str]);
    }
  }

  return Array.from(lookup.values());
}
