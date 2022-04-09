function quickSortInternal(arr: number[], start: number, end: number) {
  if (end - start <= 1) {
    return;
  }

  let pivot = arr[end - 1];
  let startPointer = start;
  let endPointer = end - 1;

  while (startPointer < endPointer) {
    while (arr[startPointer] < pivot && startPointer < endPointer) {
      startPointer++;
    }

    while (arr[endPointer] >= pivot && startPointer < endPointer) {
      endPointer--;
    }

    if (startPointer === endPointer) {
      break;
    }

    [arr[startPointer], arr[endPointer]] = [arr[endPointer], arr[startPointer]];
  }

  [arr[startPointer], arr[end - 1]] = [arr[end - 1], arr[startPointer]];
  quickSortInternal(arr, start, startPointer);
  quickSortInternal(arr, startPointer + 1, end);
}

export function quickSort(arr: number[]): number[] {
  quickSortInternal(arr, 0, arr.length);
  return arr;
}
