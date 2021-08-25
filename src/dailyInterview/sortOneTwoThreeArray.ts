/*
Hi, here's your problem today. This problem was recently asked by Google:

Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

Example 1:
Input: [3, 3, 2, 1, 3, 2, 1]
Output: [1, 1, 2, 2, 3, 3, 3]
*/

export function sortNums(numbs: number[]): number[] {
  const result = numbs.slice();
  const mid = 2;
  let i = 0;
  let j = 0;
  let n = result.length - 1;

  while (j <= n) {
    if (result[j] < mid) {
      [result[i], result[j]] = [result[j], result[i]];
      i++;
      j++;
    } else if (result[j] > mid) {
      [result[n], result[j]] = [result[j], result[n]];
      n--;
    } else {
      j++;
    }
  }

  return result;
}

export function sortNumbsCount(numbs: number[]): number[] {
  const counts: number[] = [];
  for (const item of numbs) {
    counts[item] = counts[item] ? counts[item] + 1 : 1;
  }

  let numItemsBefore = 0;
  for (let i = 0; i < counts.length; i++) {
    const count = counts[i];
    if (count) {
      counts[i] = numItemsBefore;
      numItemsBefore += count;
    }
  }

  const result = new Array(numbs.length);

  for (const item of numbs) {
    result[counts[item]] = item;
    counts[item] += 1;
  }

  return result;
}
