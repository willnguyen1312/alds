/*
Hi, here's your problem today. This problem was recently asked by Apple:

The Fibonacci sequence is the integer sequence defined by the recurrence relation:
F(n) = F(n-1) + F(n-2), where F(0) = 0 and F(1) = 1.
In other words, the nth Fibonacci number is the sum of the prior two Fibonacci numbers.
Below are the first few values of the sequence: 

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144...

Given a number n, print the n-th Fibonacci Number. 
Examples:
Input: n = 3
Output: 2

Input: n = 7
Output: 13
*/

export function nthFibonacciNumber(n: number): number {
  if (n <= 2) {
    return 1
  }

  let first = 1
  let second = 1
  let result = 0

  for (let index = 2; index < n; index++) {
    result = first + second
    first = second
    second = result
  }

  return second
}
