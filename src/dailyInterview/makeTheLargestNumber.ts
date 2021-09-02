/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a number of integers, combine them so it would create the largest number.

Example:
Input:  [17, 7, 2, 45, 72]
Output:  77245217
*/

export function makeTheLargestNumber(numbs: number[]): number {
  const toStrNumbs = numbs.map(String);
  toStrNumbs.sort((a, b) => {
    const ab = a + b;
    const ba = b + a;

    return +ab > +ba ? -1 : 1;
  });

  return +toStrNumbs.join('');
}
