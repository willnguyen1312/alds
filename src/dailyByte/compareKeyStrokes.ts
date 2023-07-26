/*
This question is asked by Amazon. Given two strings s and t
 which represents a sequence of keystrokes, where # denotes a backspace,
 return whether or not the sequences produce the same result. 

Ex: Given the following strings...

s = "ABC#", t = "CD##AB", return true
s = "como#pur#ter", t = "computer", return true
s = "cof#dim#ng", t = "code", return false
*/

export function compareKeyStrokes(first: string, second: string): boolean {
  function processSequence(str: string): string {
    const stack: string[] = []

    for (const char of str) {
      if (char === "#") {
        stack.pop()
      } else {
        stack.push(char)
      }
    }

    return stack.join("")
  }

  return processSequence(first) === processSequence(second)
}
