export type TreeNode = {
  label: string;
  children?: TreeNode[];
  parent?: TreeNode;
};

const sampleTree: TreeNode[] = [
  {
    label: '1',
    children: [
      {
        label: '1.1',
      },
      {
        label: '1.2',
        children: [
          {
            label: '1.2.3',
          },
        ],
      },
    ],
  },
];

const dfs = (treeNode?: TreeNode, parent?: TreeNode) => {
  if (!treeNode) {
    return;
  }

  treeNode.children?.forEach((node) => dfs(node, treeNode));
  treeNode.parent = parent;
};

const dfsIter = (treeNode: TreeNode) => {
  const stack: TreeNode[] = [treeNode];

  while (stack.length) {
    const current = stack.pop();
    console.log(current?.label);
    current?.children?.forEach((node) => stack.push(node));
  }
};

const bfs = (treeNode: TreeNode) => {
  const queue: TreeNode[] = [treeNode];

  while (queue.length) {
    queue.forEach((item) => {
      console.log(item.label);
      queue.push(...(item.children || []));
      queue.shift();
    });
  }
};

describe('funkyTree', () => {
  it('should work', () => {
    sampleTree.forEach((node) => bfs(node));
  });
});
