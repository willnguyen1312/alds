export function subArrSum(arr: number[], target: number): number[] {
  const prefixSums = new Map([[0, 0]]);

  let curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    const complement = curSum - target;
    if (prefixSums.has(complement)) {
      return [prefixSums.get(complement), i + 1];
    }
    prefixSums.set(curSum, i + 1);
  }
}

export function subarraySumTotal(arr: number[], target: number): number {
  const prefixSums = new Map();
  prefixSums.set(0, 1);
  let curSum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    const complement = curSum - target;
    if (prefixSums.has(complement)) {
      count += prefixSums.get(complement);
    }

    if (prefixSums.has(curSum)) {
      prefixSums.set(curSum, prefixSums.get(curSum) + 1);
    } else {
      prefixSums.set(curSum, 1);
    }
  }

  return count;
}

export function subarraySumDivisible(numbs: number[], k: number): number {
  const remainders = new Map([[0, 1]]);
  let cur_sum = 0;
  let count = 0;

  for (let i = 0; i < numbs.length; i++) {
    const num = numbs[i];
    cur_sum += num;
    const remainder = cur_sum % k;
    const complement = (k - remainder) % k;
    if (remainders.has(complement)) {
      count += remainders.get(complement);
    }
    if (remainders.has(complement)) {
      remainders.set(complement, remainders.get(complement) + 1);
    } else {
      remainders.set(complement, 1);
    }
  }

  return count;
}
