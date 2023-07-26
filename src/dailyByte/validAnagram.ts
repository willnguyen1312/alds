/*
This question is asked by Facebook. Given two strings s and t return whether or not s is an anagram of t. 
Note: An anagram is a word formed by reordering the letters of another word. 

Ex: Given the following strings...

s = "cat", t = "tac", return true
s = "listen", t = "silent", return true
s = "program", t = "function", return false
*/

export function validAnagram(first: string, second: string): boolean {
  const firstMap = convertStrToMapChar(first)
  const secondMap = convertStrToMapChar(second)

  for (const key in firstMap) {
    if (firstMap[key] !== secondMap[key]) {
      return false
    }
  }

  return true
}

function convertStrToMapChar(str: string): Record<string, number> {
  return str.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, {})
}
