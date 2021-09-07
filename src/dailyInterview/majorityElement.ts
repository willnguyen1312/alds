/*
Hi, here's your problem today. This problem was recently asked by AirBNB:

A majority element is an element that appears more than half the time.
Given a list with a majority element, find the majority element.
*/

export function majorityElement(numbs: number[]): number {
  const length = numbs.length;
  const countHash: Record<number, number> = {};

  for (const numb of numbs) {
    countHash[numb] = (countHash[numb] || 0) + 1;
    if (countHash[numb] > length / 2) {
      return numb;
    }
  }
}
