export function inOrderTraverse(
  tree: TreeNode | null,
  array: number[] = []
): void | number[] {
  if (tree) {
    inOrderTraverse(tree.left, array);
    array.push(tree.val);
    inOrderTraverse(tree.right, array);
    return array;
  }
}

export function preOrderTraverse(
  tree: TreeNode | null,
  array: number[] = []
): void | number[] {
  if (tree) {
    array.push(tree.val);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

export function postOrderTraverse(
  tree: TreeNode | null,
  array: number[] = []
): void | number[] {
  if (tree) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.val);
  }
  return array;
}
