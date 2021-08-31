export function binarySearchRecur(arr: number[], target: number) {
  return binarySearchRecurHelper(0, arr.length - 1, arr, target);
}

function binarySearchRecurHelper(left: number, right: number, arr: number[], target: number): number {
  if (left > right) {
    return -1;
  }

  const middle = Math.floor((left + right) / 2);

  if (arr[middle] === target) {
    return middle;
  }

  if (arr[middle] > target) {
    return binarySearchRecurHelper(left, middle - 1, arr, target);
  }

  return binarySearchRecurHelper(middle + 1, right, arr, target);
}

export function binarySearch(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    }

    if (arr[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}
