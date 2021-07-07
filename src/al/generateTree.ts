function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) {
    return [];
  }

  return helper(1, n);
}

function helper(low: number, high: number): Array<TreeNode | null> {
  const result: Array<TreeNode | null> = [];

  if (low > high) {
    result.push(null);
    return result;
  }

  for (let i = low; i <= high; i++) {
    const ls = helper(low, i - 1);
    const rs = helper(i + 1, high);
    for (const l of ls) {
      for (const r of rs) {
        const curr = new TreeNode(i);
        curr.left = l;
        curr.right = r;
        result.push(curr);
      }
    }
  }

  return result;
}
