export function longestSubstringWithoutRepeatingCharacters(s: string): number {
  const n = s.length;
  let longest = 0;
  let l = 0;
  let r = 0;

  const window = new Set();
  while (r < n) {
    if (!window.has(s.charAt(r))) {
      window.add(s.charAt(r));
      r++;
    } else {
      window.delete(s.charAt(l));
      l++;
    }
    longest = Math.max(longest, window.size);
  }

  return longest;
}
