/*
Hi, here's your problem today. This problem was recently asked by Amazon:

MS Excel column titles have the following pattern:
A, B, C, ..., Z, AA, AB, ..., AZ, BA, BB, ..., ZZ, AAA, AAB, ... etc.
In other words, column 1 is named "A", column 2 is "B", column 26 is "Z", column 27 is "AA"
and so forth. Given a positive integer, find its corresponding column name. 
Examples:
Input: 26
Output: Z

Input: 51
Output: AY

Input: 52
Output: AZ

Input: 676
Output: YZ

Input: 702
Output: ZZ

Input: 704
Output: AAB
*/

export function spreadsheetColumnTitle(numb: number): string {
  const result: string[] = [];

  while (numb > 0) {
    let rem = numb % 26;

    if (rem === 0) {
      result.push('Z');
      numb = Math.floor(numb / 26) - 1;
    } else {
      result.push(String.fromCharCode(rem - 1 + 'A'.charCodeAt(0)));
      numb = Math.floor(numb / 26);
    }
  }

  return result.reverse().join('');
}
