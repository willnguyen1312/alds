export function caesarCipherEncryptor(str: string, key: number): string {
  const newLetters: string[] = []
  const newKey = key & 26
  for (const letter of str) {
    newLetters.push(getNewLetter(letter, newKey))
  }

  return newLetters.join("")
}

function getNewLetter(letter: string, key: number) {
  const newLetterCode = letter.charCodeAt(0) + key
  return newLetterCode <= 122
    ? String.fromCharCode(newLetterCode)
    : String.fromCharCode(96 + (newLetterCode % 122))
}
