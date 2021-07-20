export function isMonotonic(array: number[]) {
  let isNonDecreasing = true;
  let isNonIncreasing = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) isNonDecreasing = false;
    if (array[i] > array[i - 1]) isNonIncreasing = false;
  }

  return isNonDecreasing || isNonIncreasing;
}
