function hammingWeight(n: number): number {
  let result = 0;

  while (n > 0) {
    const bit = n % 2;
    if (bit === 1) {
      result++;
    }
    n = Math.floor(n / 2);
  }

  return result;
}
