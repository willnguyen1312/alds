export class TreeNode {
  val: number;
  left?: TreeNode;
  right?: TreeNode;

  constructor(val: number, left?: TreeNode, right?: TreeNode) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

export function levelOrderTraversal(root: TreeNode): number[] {
  const res: number[] = [];
  const queue = [root];

  while (queue.length > 0) {
    const n = queue.length;
    const new_level = [];
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      new_level.push(node.val);

      for (const child of [node.left, node.right]) {
        if (child) queue.push(child);
      }
    }

    res.push(...new_level);
  }

  return res;
}
