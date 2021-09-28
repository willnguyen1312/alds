export class BinaryTreeNode {
  constructor(
    public data: number,
    public left?: BinaryTreeNode,
    public right?: BinaryTreeNode
  ) {}
}

export function levelWithMinSum(root: BinaryTreeNode): number {
  const stack: [BinaryTreeNode, number][] = [[root, 0]];
  const levelCount: Record<string, number> = {};

  while (stack.length) {
    const [node, level] = stack.pop();
    levelCount[level] = (levelCount[level] || 0) + node.data;

    if (node.left) {
      stack.push([node.left, level + 1]);
    }

    if (node.right) {
      stack.push([node.right, level + 1]);
    }
  }

  return +Object.keys(levelCount).reduce((acc, cur) => {
    return levelCount[acc] > levelCount[cur] ? cur : acc;
  });
}
