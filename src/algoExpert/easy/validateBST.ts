export function validateBST(node: TreeNode): boolean {
  return validateBstHelper(node, -Infinity, Infinity);
}

function validateBstHelper(tree: TreeNode | null, minValue: number, maxValue: number): boolean {
  if (!tree) return true;

  if (tree.val < minValue || tree.val > maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minValue, tree.val);
  const rightIsValid = validateBstHelper(tree.right, tree.val, maxValue);

  return leftIsValid && rightIsValid;
}
