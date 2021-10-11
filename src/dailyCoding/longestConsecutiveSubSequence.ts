/*
This problem was asked by Microsoft.

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example, given [100, 4, 200, 1, 3, 2], the longest consecutive element sequence is [1, 2, 3, 4].
Return its length: 4.

Your algorithm should run in O(n) complexity.
*/

export function longestConsecutiveSubSequence(arr: number[]) {
  const length = arr.length;
  let set = new Set();
  let result = 0;

  for (let i = 0; i < length; i++) {
    set.add(arr[i]);
  }

  for (let i = 0; i < length; i++) {
    // if current element is the starting element of a sequence
    if (!set.has(arr[i] - 1)) {
      let current = arr[i];
      while (set.has(current)) current++;

      result = Math.max(result, current - arr[i]);
    }
  }

  return result;
}
