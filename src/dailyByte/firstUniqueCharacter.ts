/*
This question is asked by Microsoft. Given a string, return the index of its first unique character.
If a unique character does not exist, return -1. 

Ex: Given the following strings...

"abcabd", return 2
"firstUniqueCharacter2", return 0
"developer", return 0
*/

export function firstUniqueCharacter(str: string): number {
  const countMap: Record<string, number> = str.split('').reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});

  for (let index = 0; index < str.length; index++) {
    const char = str[index];
    if (countMap[char] === 1) {
      return index;
    }
  }

  return -1;
}

export function firstUniqueCharacter2(str: string): number {
  const countMap: Map<string, [number, number]> = str
    .split('')
    .reduce((acc, cur, index) => {
      acc.set(cur, [(acc.get(cur) || 0) + 1, index]);
      return acc;
    }, new Map());

  for (const [key, value] of countMap) {
    if (value[0] === 1) {
      return value[1];
    }
  }

  return -1;
}
