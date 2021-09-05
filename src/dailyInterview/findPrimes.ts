/*
Hi, here's your problem today. This problem was recently asked by Amazon:

Given a positive integer n, find all primes less than n.
*/

export function findPrimes(numb: number): number[] {
  const result: number[] = [];
  for (let i = 2; i < numb; i++) {
    if (checkPrime(i)) {
      result.push(i);
    }
  }

  return result;
}

function checkPrime(n: number) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) if (n % i === 0) return false;

  return true;
}
