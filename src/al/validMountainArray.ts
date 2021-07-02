export function validMountainArray(arr: number[]): boolean {
  let length = arr.length;
  let i = 0;

  // walk up
  while (i < length - 1 && arr[i] < arr[i + 1]) i++;

  // peak can't be first or last
  if (i === 0 || i === length - 1) return false;

  // walk down
  while (i < length - 1 && arr[i] > arr[i + 1]) i++;

  return i === length - 1;
}
