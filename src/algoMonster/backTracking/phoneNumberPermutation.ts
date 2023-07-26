const KEYBOARD = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
}

export function phoneNumberPermutation(digits: string): string[] {
  function dfs(path: string[], res: string[]) {
    if (path.length === digits.length) {
      res.push(path.join(""))
      return
    }

    const nextNumber = digits.charAt(path.length)

    for (const letter of KEYBOARD[nextNumber]) {
      path.push(letter)
      dfs(path, res)
      path.pop()
    }
  }

  const res = []
  dfs([], res)
  return res
}
