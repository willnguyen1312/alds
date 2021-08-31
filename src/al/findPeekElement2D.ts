function findMax(arr: number[][], rows: number, mid: number, max: number): number {
  let max_index = 0;
  for (let i = 0; i < rows; i++) {
    if (max < arr[i][mid]) {
      // Saving global maximum and its index
      // to check its neighbours
      max = arr[i][mid];
      max_index = i;
    }
  }
  return max_index;
}

// Function to change the value of [max]
function Max(arr: number[][], rows: number, mid: number, max: number) {
  for (let i = 0; i < rows; i++) {
    if (max < arr[i][mid]) {
      // Saving global maximum and its index
      // to check its neighbours
      max = arr[i][mid];
    }
  }
  return max;
}

// Function to find a peak element
function findPeakRec(arr: number[][], rows: number, columns: number, mid: number): number {
  // Evaluating maximum of mid column.
  // Note max is passed by value.
  let max = 0;
  let max_index = findMax(arr, rows, mid, max);
  max = Max(arr, rows, mid, max);

  // If we are on the first or last column,
  // max is a peak
  if (mid === 0 || mid === columns - 1) return max;

  // If mid column maximum is also peak
  if (max >= arr[max_index][mid - 1] && max >= arr[max_index][mid + 1]) return max;

  // If max is less than its left
  if (max < arr[max_index][mid - 1]) return findPeakRec(arr, rows, columns, mid - Math.ceil(mid / 2));

  // If max is less than its left
  // if (max < arr[max_index][mid+1])
  return findPeakRec(arr, rows, columns, mid + Math.ceil(mid / 2));
}

// A wrapper over findPeakRec()
function findPeekElement2D(arr: number[][], rows: number, columns: number) {
  return findPeakRec(arr, rows, columns, Math.floor(columns / 2));
}
