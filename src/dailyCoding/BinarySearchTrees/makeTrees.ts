export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function makeTrees(low: number, high: number): BinaryTreeNode[] {
  const result: BinaryTreeNode[] = [];

  if (low > high) {
    result.push(null);
    return result;
  }

  for (let index = low; index < high + 1; index++) {
    const leftTrees = makeTrees(low, index - 1);
    const rightTrees = makeTrees(index + 1, high);

    for (const leftTree of leftTrees) {
      for (const rightTree of rightTrees) {
        const node = new BinaryTreeNode(index, leftTree, rightTree);
        result.push(node);
      }
    }
  }

  return result;
}
