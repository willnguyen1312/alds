const myPow = function (x: number, n: number) {
  if (!n) return 1;
  const memo = new Map<number, number>();

  function run(num: number): number {
    if (num === 1) return x;

    const cachedResult = memo.get(num);
    if (cachedResult) return cachedResult;

    const mid = Math.floor(num / 2);

    const result: number = run(mid) * run(num - mid);

    memo.set(num, result);
    return result;
  }

  const result = run(Math.abs(n));
  return n < 0 ? 1 / result : result;
};
