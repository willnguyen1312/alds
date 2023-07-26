// This problem was asked by Apple.

// Implement the function fib(n), which returns the nth number in the Fibonacci sequence,
// using only O(1) space.

export function fib(n: number): number {
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
