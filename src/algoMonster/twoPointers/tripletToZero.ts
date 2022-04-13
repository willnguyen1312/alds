export function tripletToZero(arr: number[]): number[][] {
  const n = arr.length;
  const result: number[][] = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    let l = i + 1;
    let r = n - 1;
    let x = arr[i];
    while (l < r) {
      if (x + arr[l] + arr[r] === 0) {
        result.push([x, arr[l], arr[r]]);
        l++;
        r--;
      } else if (x + arr[l] + arr[r] < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
}
