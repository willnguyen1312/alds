/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a list of numbers and a target number n, find 3 numbers in the list 
hat sums closest to the target number n. There may be multiple ways of
creating the sum closest to the target number, you can return any combination in any order.
*/

export function closestSum(numbs: number[], target: number): number[] {
  const sortedNumbs = numbs.slice().sort((a, b) => a - b);

  let result: number[] = [];
  let closestSum = Number.MAX_VALUE;

  for (let i = 0; i < sortedNumbs.length - 2; i++) {
    let ptr1 = i + 1;
    let ptr2 = sortedNumbs.length - 1;

    while (ptr1 < ptr2) {
      const currentSum = sortedNumbs[i] + sortedNumbs[ptr1] + sortedNumbs[ptr2];

      if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
        closestSum = currentSum;
        result = [sortedNumbs[i], sortedNumbs[ptr1], sortedNumbs[ptr2]];
      }

      if (currentSum > target) {
        ptr2--;
      } else {
        ptr1++;
      }
    }
  }

  return result;
}
