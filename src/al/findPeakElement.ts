function findPeakUtil(arr: number[], low: number, high: number, n: number): number {
  // Find index of middle element
  // (low + high)/2
  const mid = low + Math.floor((high - low) / 2);

  // Compare middle element with its
  // neighbours (if neighbours exist)
  if ((mid == 0 || arr[mid - 1] <= arr[mid]) && (mid == n - 1 || arr[mid + 1] <= arr[mid])) return mid;
  // If middle element is not peak and its
  // left neighbour is greater than it,
  // then left half must have a peak element
  else if (mid > 0 && arr[mid - 1] > arr[mid]) return findPeakUtil(arr, low, mid - 1, n);
  // If middle element is not peak and its
  // right neighbour is greater than it,
  // then right half must have a peak element
  else return findPeakUtil(arr, mid + 1, high, n);
}

// A wrapper over recursive function findPeakUtil()

function findPeakNumber(arr: number[], n: number) {
  return findPeakUtil(arr, 0, n - 1, n);
}
