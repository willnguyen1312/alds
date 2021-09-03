/*
Hi, here's your problem today. This problem was recently asked by Apple:

You are given two strings, A and B. Return whether A can be shifted some number of times to get B.

Eg. A = abcde, B = cdeab should return true because A can be shifted 3 times to the right to get B.
A = abc and B= acb should return false.
*/

export function shiftedString(first: string, second: string): boolean {
  let firstIdx = 0;
  let secondIdx = 0;

  while (firstIdx < first.length && first[firstIdx] !== second[secondIdx]) {
    firstIdx++;
  }

  if (firstIdx === first.length) {
    return false;
  }

  while (secondIdx < second.length) {
    firstIdx = firstIdx === first.length ? 0 : firstIdx;

    if (first[firstIdx] !== second[secondIdx]) {
      return false;
    }

    firstIdx++;
    secondIdx++;
  }

  return true;
}
