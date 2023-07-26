/*
This question is asked by Amazon.

Given two strings, passage and text return whether or not the characters
in text can be used to form the given passage. 

Note: Each character in text may only be used once and passage
and text will only contain lowercase alphabetical characters. 

Ex: Given the following passage and text…

passage = "bat", text = "cat", return false.

Ex: Given the following passage and text…
passage = "dog" text = "didnotgo", return true.
*/

export function characterScramble(passage: string, text: string): boolean {
  const passageArr: string[] = passage.split("")
  const textCharSet: Set<string> = new Set(text)

  return passageArr.every((char) => textCharSet.has(char))
}
