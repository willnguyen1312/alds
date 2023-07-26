/*
Hi, here's your problem today. This problem was recently asked by Uber:

You are given a list of n numbers, where every number is at most k indexes away
from its properly sorted index. Write a sorting algorithm (that will be given the number k)
for this list that can solve this in O(n log k)

Example:
Input: [3, 2, 6, 5, 4], k=2
Output: [2, 3, 4, 5, 6]
As seen above, every number is at most 2 indexes away from its proper sorted index.
*/

export function sortPartiallySortedList(numbs: number[], k: number): number[] {
  const length = numbs.length
  const minHeap = []

  // add first k + 1 items to the min heap
  for (let i = 0; i < k + 1; i++) {
    minHeap.push(numbs[i])
  }

  minHeap.sort(function (a, b) {
    return a - b
  })

  let index = 0
  for (let i = k + 1; i < length; i++) {
    numbs[index++] = minHeap[0]
    minHeap.shift()
    minHeap.push(numbs[i])
    minHeap.sort(function (a, b) {
      return a - b
    })
  }

  while (minHeap.length) {
    numbs[index++] = minHeap[0]
    minHeap.shift()
  }

  return numbs
}
