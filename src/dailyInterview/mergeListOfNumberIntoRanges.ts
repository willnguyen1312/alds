/*
Hi, here's your problem today. This problem was recently asked by Facebook:

Given a sorted list of numbers, return a list of strings that represent all of the consecutive numbers.

Example:
Input: [0, 1, 2, 5, 7, 8, 9, 9, 10, 11, 15]
Output: ['0->2', '5->5', '7->11', '15->15']
Assume that all numbers will be greater than or equal to 0, and each element can repeat.
*/

export function mergeListOfNumberIntoRanges(numbs: number[]): string[] {
  const result: string[] = [];
  let start: number = numbs[0];
  let end: number = numbs[0];

  for (let index = 0; index < numbs.length; index++) {
    const element = numbs[index];
    const diff = element - end;
    if (diff > 1) {
      result.push(`${start}->${end}`);
      start = element;
    }
    end = element;
  }

  result.push(`${start}->${end}`);
  return result;
}
