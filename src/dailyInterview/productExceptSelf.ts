/*
Hi, here's your problem today. This problem was recently asked by Amazon:

You are given an array of integers. Return an array of the same size where
he element at each index is the product of all the elements in the original array except for the element at
that index.

For example, an input of [1, 2, 3, 4, 5] should return [120, 60, 40, 30, 24].

You cannot use division in this problem.
*/

export function productExceptSelf(numbs: number[]): number[] {
  const result = [];

  // result is the resultant array
  // in this traversal, we initialize with the product of nums on the left of a num
  result[0] = 1;
  for (let i = 1; i < numbs.length; ++i) {
    result[i] = result[i - 1] * numbs[i - 1];
  }

  // in this traversal, we multiply the product of nums on the right of a num
  let right = 1;
  for (let i = numbs.length - 1; i >= 0; --i) {
    result[i] = right * result[i];
    right *= numbs[i];
  }

  return result;
}
