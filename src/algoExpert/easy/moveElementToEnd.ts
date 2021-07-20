export function moveElementToEnd(arr: number[], target: number) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (i < j && arr[j] === target) {
      j--;
    }

    if (arr[i] === target) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    i++;
  }

  return arr;
}
