const decodeString = (s: string): string => {
  const resultArr: string[] = [""]
  const timesStack: number[] = []
  let times = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (isFinite(+char)) {
      times = 10 * times + +char
    } else if (char === "[") {
      timesStack.push(times)
      resultArr.push("")
      times = 0
    } else if (char === "]") {
      const times = timesStack.pop()!
      const subStr = resultArr.pop()!
      resultArr[resultArr.length - 1] += subStr.repeat(times)
    } else {
      resultArr[resultArr.length - 1] += char
    }
  }

  return resultArr[0]
}

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
