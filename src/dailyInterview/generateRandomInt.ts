/*
This question was asked by Google.

Given an integer n and a list of integers l,
write a function that randomly generates a number from 0 to n-1 that isn't in l (uniform).
*/

export function generateRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}
