/*
Hi, here's your problem today. This problem was recently asked by Microsoft:

Given an array of heights, determine whether the array forms a "mountain" pattern. A mountain pattern goes up and then down.

Like
  /\
 /  \
/    \
*/

export function mountainArray(numbs: number[]): boolean {
  let increasing = true

  if (numbs.length < 3 || numbs[0] >= numbs[1]) return false

  for (let i = 2; i < numbs.length; i++) {
    if (numbs[i - 1] === numbs[i]) return false

    if (increasing && numbs[i - 1] > numbs[i]) {
      increasing = false
    } else if (!increasing && numbs[i - 1] < numbs[i]) {
      return false
    }
  }

  return increasing ? false : true
}
