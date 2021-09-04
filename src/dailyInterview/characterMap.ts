/*
Hi, here's your problem today. This problem was recently asked by Google:

Given two strings, find if there is a one-to-one mapping of characters between the two strings.

Example
Input: abc, def
Output: True # a -> d, b -> e, c -> f

Input: aab, def
Output: False # a can't map to d and e 
*/

export function characterMap(first: string, second: string): boolean {
  const l1 = first.length;
  const l2 = second.length;
  const MAX = 26;

  if (l1 !== l2) return false;

  const freq1 = new Array(MAX).fill(0);
  const freq2 = new Array(MAX).fill(0);

  for (let i = 0; i < l1; i++) {
    freq1[first[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < l2; i++) {
    freq2[second[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < MAX; i++) {
    if (freq1[i] === 0) continue;
    let found = false;

    for (let j = 0; j < MAX; j++) {
      if (freq1[i] === freq2[j]) {
        freq2[j] = -1;

        found = true;
        break;
      }
    }

    if (!found) return false;
  }

  return true;
}
