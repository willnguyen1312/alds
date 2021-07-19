export function productSum(arr: number[], multiplier = 1): number {
  let result = 0;

  for (const item of arr) {
    if (Array.isArray(item)) {
      result += productSum(item, multiplier + 1);
    } else {
      result += item;
    }
  }

  return result * multiplier;
}
