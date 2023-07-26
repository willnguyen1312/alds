/*
This problem was asked by Alibaba.

Given an even number (greater than 2), return two prime numbers
whose sum will be equal to the given number.

Example:

Input: 4
Output: 2 + 2 = 4
If there are more than one solution possible, return the lexicographically smaller solution.

If [a, b] is one solution with a <= b, and [c, d] is another solution with c <= d, then

[a, b] < [c, d]
If a < c OR a==c AND b < d.
*/

function sieveOfEratosthenes(n: number, isPrime: boolean[]): void {
  isPrime[0] = isPrime[1] = false
  for (let i = 2; i <= n; i++) isPrime[i] = true

  for (let p = 2; p * p <= n; p++) {
    if (isPrime[p] === true) {
      for (let i = p * p; i <= n; i += p) isPrime[i] = false
    }
  }
}

export function sumPrimes(n: number): number[] {
  const isPrimeArr = new Array(n + 1)
  for (let i = 0; i < n + 1; i++) {
    isPrimeArr[i] = false
  }

  sieveOfEratosthenes(n, isPrimeArr)

  for (let i = 0; i < n; i++) {
    if (isPrimeArr[i] && isPrimeArr[n - i]) {
      return [i, n - i]
    }
  }

  return []
}
