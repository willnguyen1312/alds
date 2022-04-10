export function subArrSum(arr: number[], target: number): number[] {
  const prefixSums = new Map();

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
