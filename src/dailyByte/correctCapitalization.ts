/*
This question is asked by Google. Given a string, return whether or not
it uses capitalization correctly.
A string correctly uses capitalization if all letters are capitalized,
no letters are capitalized, or only the first letter is capitalized.

Ex: Given the following strings...

"USA", return true
"Calvin", return true
"compUter", return false
"coding", return true
*/
export function correctCapitalization(word: string): boolean {
  let capWord = word.toUpperCase();
  let nonCapWord = word.toLowerCase();

  if (capWord == word || nonCapWord == word) return true;

  let capCount = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] == word[i].toUpperCase()) capCount++;

    if (capCount > 1) return false;
  }

  if (word[0] != word[0].toUpperCase()) return false;

  return true;
}
