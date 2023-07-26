/*
Hi, here's your problem today. This problem was recently asked by Google:

You are given an array of tuples (start, end) representing time intervals for lectures.
The intervals may be overlapping. Return the number of rooms that are required.

For example. [(30, 75), (0, 50), (60, 150)] should return 2.
*/

export function roomSchedule(arr: number[][]): number {
  const sortedArr = arr.sort((a, b) => a[0] - b[0])
  const mergedArr: number[][] = []

  let current = sortedArr[0]

  for (let index = 1; index < sortedArr.length; index++) {
    const element = sortedArr[index]

    if (current[1] < element[0]) {
      mergedArr.push(current)
      current = element
    } else {
      current[1] = Math.max(current[1], element[1])
    }
  }

  mergedArr.push(current)
  return mergedArr.length
}
