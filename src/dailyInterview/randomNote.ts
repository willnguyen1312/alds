/*
Hi, here's your problem today. This problem was recently asked by Google:

A criminal is constructing a ransom note. In order to disguise his handwriting,
he is cutting out letters from a magazine.

Given a magazine of letters and the note he wants to write,
determine whether he can construct the word.
*/

export function randomNote(chars: string[], note: string) {
  const charsSet = new Set(chars);

  return note.split('').every((letter) => charsSet.has(letter));
}
