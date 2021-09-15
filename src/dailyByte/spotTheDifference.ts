/*
This question is asked by Google. You are given two strings, s and t
which only consist of lowercase letters. t is generated by shuffling the letters
in s as well as potentially adding an additional random character.
Return the letter that was randomly added to t if it exists, otherwise, return ’ ‘. 
Note: You may assume that at most one additional character can be added to t. 

Ex: Given the following strings...

s = "foobar", t = "barfoot", return 't'
s = "ide", t = "idea", return 'a'
s = "coding", t "ingcod", return ''
*/

export function spotTheDifference(first: string, second: string): string {
  const setChar = new Set(second);

  for (const char of first) {
    setChar.delete(char);
  }

  for (const char of setChar) {
    return char;
  }

  return '';
}
