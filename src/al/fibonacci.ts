function fibonacci(n: number, cacheMap = new Map<number, number>()): number {
  if (n < 2) {
    return n;
  }

  if (cacheMap.has(n)) {
    return cacheMap.get(n) as number;
  }

  const result = fibonacci(n - 1) + fibonacci(n - 2);
  cacheMap.set(n, result);

  return result;
}
