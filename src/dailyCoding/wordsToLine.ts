/*
This problem was asked by Amazon.

Given a string s and an integer k, break up the string into multiple lines
such that each line has a length of k or less. You must break it up
so that words don't break across lines.
Each line has to have the maximum possible amount of words.
If there's no way to break the text up, then return null.

You can assume that there are no spaces at the ends of the string and that
there is exactly one space between each word.

For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10,
you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"].
No string in the list has a length of more than 10.
*/

export function wordsToLine(str: string, target: number): string[] {
  const strArr = str.split(' ');

  const result: string[] = [];
  let current = strArr[0];

  for (let index = 1; index < strArr.length; index++) {
    const word = strArr[index];
    let temp = current + ' ' + word;

    if (temp.length > target) {
      result.push(current.trimLeft());
      current = word;
    } else {
      current = temp;
    }
  }

  result.push(current);
  return result;
}
