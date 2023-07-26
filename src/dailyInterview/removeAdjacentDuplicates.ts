/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given a string, we want to remove 2 adjacent characters that are the same,
and repeat the process with the new string until we can no longer perform the operation.
*/

export function removeAdjacentDuplicates(str: string): string {
  const strArr = str.split("")
  let index = 0

  while (index < strArr.length) {
    let jndex = index

    while (jndex < strArr.length && strArr[index] === strArr[jndex + 1]) {
      jndex++
    }

    const range = jndex - index

    if (range > 0) {
      strArr.splice(index, range + 1)
      index--
    } else {
      index++
    }
  }

  return strArr.join("")
}
