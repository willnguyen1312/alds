export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function makeBST(
  numbs: number[],
  left = 0,
  right = numbs.length
): BinaryTreeNode {
  if (left > right) {
    return null;
  }

  const middle = Math.floor((left + right) / 2);
  const root = new BinaryTreeNode(numbs[middle]);
  root.left = makeBST(numbs, left, middle - 1);
  root.right = makeBST(numbs, middle + 1, right);

  return root;
}
