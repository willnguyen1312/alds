/*
Hi, here's your problem today. This problem was recently asked by Apple:

Create a class that initializes with a list of numbers and has one method called sum.
sum should take in two parameters, start_idx and end_idx and
return the sum of the list from start_idx (inclusive) to end_idx` (exclusive).

You should optimize for the sum method.
*/

export function optimizeListSum(numbs: number[]) {
  const cacheSum: Record<number, number> = {};
  let currentSum = 0;

  for (let index = 0; index < numbs.length; index++) {
    const element = numbs[index];
    currentSum += element;
    cacheSum[element] = currentSum;
  }

  return function getSumFromRange(start: number, end: number) {
    return cacheSum[end] - cacheSum[start];
  };
}
