export function minHeightBst(arr: number[]): TreeNode | null {
  return constructMinHeightBst(arr, null, 0, arr.length - 1);
}

function constructMinHeightBst(
  arr: number[],
  bst: TreeNode | null,
  startIdx: number,
  endIdx: number
): TreeNode | null {
  if (endIdx < startIdx) return null;

  const midIdx = Math.floor((startIdx + endIdx) / 2);
  const valueToAdd = arr[midIdx];

  if (bst === null) {
    bst = new TreeNode(valueToAdd);
  } else {
    bst.insert(valueToAdd);
  }

  constructMinHeightBst(arr, bst, startIdx, midIdx - 1);
  constructMinHeightBst(arr, bst, midIdx + 1, endIdx);

  return bst;
}
