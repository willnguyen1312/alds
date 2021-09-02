/*
Hi, here's your problem today. This problem was recently asked by Amazon:

You are given an array of integers. Return the length of the
longest consecutive elements sequence in the array.

For example, the input array [100, 4, 200, 1, 3, 2] has the
longest consecutive sequence 1, 2, 3, 4, and thus, you should return its length, 4.
*/

export function findLongestConsecutiveSubSequence(arr: number[]) {
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
