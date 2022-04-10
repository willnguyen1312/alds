export function mergeSort(arr: number[]): number[] {
  const length = arr.length;

  if (length <= 1) {
    return arr;
  }

  const midpoint = Math.floor(length / 2);
  const leftArr = mergeSort(arr.slice(0, midpoint));
  const rightArr = mergeSort(arr.slice(midpoint));

  const result = [];
  let left = 0;
  let right = 0;

  while (left < midpoint || right < length - midpoint) {
    if (left === midpoint) {
      result.push(rightArr[right]);
      right++;
    } else if (right === length - midpoint) {
      result.push(leftArr[left]);
      left++;
    } else if (leftArr[left] <= rightArr[right]) {
      result.push(leftArr[left]);
      left++;
    } else {
      result.push(rightArr[right]);
      right++;
    }
  }

  return result;
}
