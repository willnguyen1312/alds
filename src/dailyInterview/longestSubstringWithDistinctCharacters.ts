/*
Hi, here's your problem today. This problem was recently asked by Amazon:

You are given a string s, and an integer k. Return the length of the longest substring in s that contains at most k distinct characters.

For instance, given the string:
aabcdefff and k = 3, then the longest substring with 3 distinct characters would be defff. The answer should be 5.
*/

let MAX_CHARS = 26;

function isValid(count: number[], k: number) {
  let val = 0;
  for (let i = 0; i < MAX_CHARS; i++) {
    if (count[i] > 0) {
      val++;
    }
  }

  return k >= val;
}

export function longestSubstringWithDistinctCharacters(str: string, k: number) {
  let length = str.length;
  let count = new Array(MAX_CHARS);

  let curr_start = 0;
  let curr_end = 0;

  let max_window_size = 1;
  let max_window_start = 0;

  for (let i = 0; i < MAX_CHARS; i++) {
    count[i] = 0;
  }

  count[str[0].charCodeAt(0) - 'a'.charCodeAt(0)]++;

  for (let i = 1; i < length; i++) {
    count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    curr_end++;

    while (!isValid(count, k)) {
      count[str[curr_start].charCodeAt(0) - 'a'.charCodeAt(0)]--;
      curr_start++;
    }

    if (curr_end - curr_start + 1 > max_window_size) {
      max_window_size = curr_end - curr_start + 1;
      max_window_start = curr_start;
    }
  }

  return str.slice(max_window_start, max_window_start + max_window_size + 1);
}
