/*
This problem was asked by Yelp.

Given a mapping of digits to letters (as in a phone number),
and a digit string, return all possible letters the number could represent.
You can assume each valid number in the mapping is a single digit.

For example if {“2”: [“a”, “b”, “c”], 3: [“d”, “e”, “f”], …}
then “23” should return [“ad”, “ae”, “af”, “bd”, “be”, “bf”, “cd”, “ce”, “cf"].
*/

export function phoneNumberToLetters(digits: string): string[] {
  if (!digits || digits.length === 0) return [];

  const map = new Map();
  map.set('0', []);
  map.set('1', []);
  map.set('2', ['a', 'b', 'c']);
  map.set('3', ['d', 'e', 'f']);
  map.set('4', ['g', 'h', 'i']);
  map.set('5', ['j', 'k', 'l']);
  map.set('6', ['m', 'n', 'o']);
  map.set('7', ['p', 'q', 'r', 's']);
  map.set('8', ['t', 'u', 'v']);
  map.set('9', ['w', 'x', 'y', 'z']);

  const result: string[] = [];

  function helper(digits: string, permutedArr: string[]) {
    if (permutedArr.length === digits.length) {
      result.push(permutedArr.join(''));
      return;
    }

    for (const item of map.get(digits[permutedArr.length])) {
      permutedArr.push(item);
      helper(digits, permutedArr);
      permutedArr.pop();
    }
  }

  helper(digits, []);

  return result;
}
