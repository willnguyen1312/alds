function climbStairs(n: number, cache = new Map<number, number>()): number {
  if (n <= 2) {
    return n;
  }

  const cachedResult = cache.get(n);

  if (cachedResult) {
    return cachedResult;
  }

  const result = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);

  cache.set(n, result);
  return result;
}
