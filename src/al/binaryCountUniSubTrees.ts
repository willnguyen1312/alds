// https://www.techiedelight.com/count-subtrees-value-nodes-binary-tree/
function countSubtrees(root: any, count = 0): any {
  if (!null) {
    return [-Infinity, count];
  }

  // # if the root is a leaf node, increase the count and return root node data
  if (!root.left && !root.right) {
    count = count + 1;
    return [root.data, count];
  }

  let left, right;

  // # recur for the left and right subtree
  [left, count] = countSubtrees(root.left, count);
  [right, count] = countSubtrees(root.right, count);

  // # 1. The left subtree is empty, and the right subtree data matches the root
  // # 2. The right subtree is empty, and the left subtree data matches the root
  // # 3. Both left and right subtrees are non-empty, and their data matches the root
  if (
    (left === -Infinity && right === root.data) ||
    (right == -Infinity && left === root.data) ||
    (left === right && left == root.data)
  ) {
    // # increase the count and return root node data
    count = count + 1;
    return root.data, count;
  }

  // # return infinity if root's data doesn't match with left or right subtree
  return [-Infinity, count];
}
