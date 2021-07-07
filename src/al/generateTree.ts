function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) {
    return [];
  }

  return helper(1, n);
}

function helper(m: number, n: number): Array<TreeNode | null> {
  const result: Array<TreeNode | null> = [];

  if (m > n) {
    result.push(null);
    return result;
  }

  for (let i = m; i <= n; i++) {
    const ls = helper(m, i - 1);
    const rs = helper(i + 1, n);
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
