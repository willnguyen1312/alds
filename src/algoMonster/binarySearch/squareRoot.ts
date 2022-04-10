// Given an integer, find its square root without using built-in square root function.
// Only return the integer part (truncate the decimals).

export function squareRoot(n: number): number {
  let left = 0;
  let right = n;
  let result = -1;

  while (left <= right) {
    const mid = left + Math.trunc((right - left) / 2);

    if (mid * mid <= n) {
      left = mid + 1;
      result = mid;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
