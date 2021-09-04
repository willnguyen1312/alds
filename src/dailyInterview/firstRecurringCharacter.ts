/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a string, return the first recurring letter that appears.
If there are no recurring letters, return None.

Example:
Input: qwertty
Output: t

Input: qwerty
Output: None
*/

export function firstRecurringCharacter(str: string): string {
  const charSet: Set<string> = new Set();

  for (const char of str) {
    if (charSet.has(char)) {
      return char;
    }

    charSet.add(char);
  }

  return '';
}
