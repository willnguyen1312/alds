/*
Hi, here's your problem today. This problem was recently asked by Amazon:

You are given an array of integers, and an integer K.
Return the subarray which sums to K. You can assume that a solution will always exist.
*/

export function subArrayWithTarget(numbs: number[], target: number): number[] {
  const sumHash: Record<number, number> = {};
  let result: number[] = [];
  let acc = 0;

  for (let index = 0; index < numbs.length; index++) {
    const element = numbs[index];

    acc += element;

    sumHash[acc] = index;
    const diff = acc - target;

    if (sumHash[diff]) {
      result = numbs.slice(sumHash[diff] + 1, index + 1);
      break;
    }
  }

  return result;
}
