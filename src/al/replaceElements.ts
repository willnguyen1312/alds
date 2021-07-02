export function replaceElements(arr: number[]): number[] {
  let maxVal = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = maxVal;
    maxVal = Math.max(maxVal, temp);
  }
  return arr;
}
