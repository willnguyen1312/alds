/*
Hi, here's your problem today. This problem was recently asked by Uber:

Given a string s and a character c, find the distance for all characters
in the string to the character c in the string s.
You can assume that the character c will appear at least once in the string.
*/

export function shortestDistanceToCharacter(
  str: string,
  char: string
): number[] {
  const result: number[] = [];
  const strArr: string[] = str.split('');
  const matches: number[] = strArr.reduce((acc, cur, index) => {
    if (cur === char) {
      acc.push(index);
    }
    return acc;
  }, []);

  if (matches.length === 0) {
    return [];
  }

  let leftIndex = 0;
  let rightIndex = matches[leftIndex + 1] ? leftIndex + 1 : leftIndex;

  for (let index = 0; index < str.length; index++) {
    const start = matches[leftIndex];
    const end = matches[rightIndex];

    if (index < start) {
      result.push(start - index);
      continue;
    }

    const inRange = index >= start && index <= end;
    if (inRange) {
      result.push(Math.min(index - start, end - index));
      continue;
    }

    result.push(index - end);
    leftIndex = rightIndex;
    rightIndex = matches[leftIndex + 1] ? leftIndex + 1 : leftIndex;
  }

  return result;
}
