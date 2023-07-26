/*
Hi, here's your problem today. This problem was recently asked by Apple:

Given an array of integers, arr, where all numbers occur twice except one number which occurs once, find the number. Your solution should ideally be O(n) time and use constant extra space. 
Example:
Input: arr = [7, 3, 5, 5, 4, 3, 4, 8, 8]
Output: 7
*/

export function findSingleElement(numbs: number[]): number {
  return numbs.reduce((acc, cur) => {
    return acc ^ cur
  })
}
