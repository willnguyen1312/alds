/*
This question is asked by Apple.

Given a 32 bit signed integer, reverse it and return the result. 
Note: You may assume that the reversed integer will always fit
within the bounds of the integer data type. 

Ex: Given the following integer num…

num = 550, return 55
Ex: Given the following integer num…

num = -37, return -73
*/

export function reverseBits(numb: number): number {
  const numbStr = numb.toString(2).split("").reverse().join("")
  return parseInt(numbStr, 2)
}
