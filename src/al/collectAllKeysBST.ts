export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function collectAllKeysBST(
  root: BinaryTreeNode,
  predicate: (value: number) => boolean
) {
  const result: Set<number> = new Set();

  function collectAllKeysBSTHelper(node: BinaryTreeNode): boolean {
    let found = false;
    if (predicate(node.data)) {
      found = true;
    }

    if (node.left) {
      if (collectAllKeysBSTHelper(node.left)) {
        found = true;
      }
    }

    if (node.right) {
      if (collectAllKeysBSTHelper(node.right)) {
        found = true;
      }
    }

    if (found) {
      result.add(node.data);
    }

    return found;
  }

  collectAllKeysBSTHelper(root);

  return result;
}
