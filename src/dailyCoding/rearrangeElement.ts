/*
This question is asked by Apple. Given an array of numbers,
move all zeroes in the array to the end while maintaining the relative order of the other numbers. 
Note: You must modify the array you’re given (i.e. you cannot create a new array). 

Ex: Given the following array nums…

nums = [3, 7, 0, 5, 0, 2], rearrange nums to look like the following [3,7,5,2,0,0]
*/

export function rearrangeElement(numbs: number[]) {
  let numbIndex = 0
  let zeroIndex = 0

  while (numbIndex < numbs.length) {
    if (numbs[numbIndex] !== 0) {
      ;[numbs[zeroIndex], numbs[numbIndex]] = [
        numbs[numbIndex],
        numbs[zeroIndex],
      ]
      zeroIndex++
    }
    numbIndex++
  }

  return numbs
}
