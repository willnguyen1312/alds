function mergeArrays(
  arr1: number[],
  arr2: number[],
  n1: number,
  n2: number,
  arr3: number[]
) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) arr3[k++] = arr1[i++];
    else arr3[k++] = arr2[j++];
  }

  while (i < n1) arr3[k++] = arr1[i++];

  while (j < n2) arr3[k++] = arr2[j++];
}

export function mergeKSortedArrays(
  numbs: number[][],
  start: number = 0,
  end: number = numbs.length - 1,
  output: number[] = []
) {
  const kLength = numbs[0].length;
  if (start === end) {
    for (let p = 0; p < kLength; p++) output[p] = numbs[start][p];
    return;
  }

  if (end - start === 1) {
    mergeArrays(numbs[start], numbs[end], kLength, kLength, output);
    return;
  }

  const out1 = [];
  const out2 = [];

  // Divide the array into halves
  mergeKSortedArrays(numbs, start, (start + end) / 2, out1);
  mergeKSortedArrays(numbs, (start + end) / 2 + 1, end, out2);

  // Merge the output array
  mergeArrays(
    out1,
    out2,
    kLength * ((start + end) / 2 - start + 1),
    kLength * (end - (start + end) / 2),
    output
  );

  return output;
}
