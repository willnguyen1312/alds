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
      result.add(node.data);
      found = true;
    }

    if (node.left) {
      result.add(node.data);
      if (collectAllKeysBSTHelper(node.left)) {
        found = true;
      }
    }

    if (node.right) {
      result.add(node.data);
      if (collectAllKeysBSTHelper(node.right)) {
        found = true;
      }
    }

    if (!found) {
      result.delete(node.data);
    }

    return found;
  }

  collectAllKeysBSTHelper(root);

  return result;
}
