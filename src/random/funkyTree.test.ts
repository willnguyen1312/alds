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
        children: [
          {
            label: '1.1.1',
          },
        ],
      },
      {
        label: '1.2',
      },
      {
        label: '1.3',
        children: [
          {
            label: '1.3.1',
          },
        ],
      },
    ],
  },
];

const dfsAddParent = (treeNode?: TreeNode, parent?: TreeNode) => {
  if (!treeNode) {
    return;
  }

  treeNode.children?.forEach((node) => dfsAddParent(node, treeNode));
  treeNode.parent = parent;
};

const dfsIter = (treeNode: TreeNode) => {
  const stack: TreeNode[] = [treeNode];
  const result: string[] = [];

  while (stack.length) {
    const current = stack.pop();
    result.push(current.label);

    const toQueue =
      current?.children?.reduceRight((acc, cur) => {
        acc.push(cur);
        return acc;
      }, []) || [];

    stack.push(...toQueue);
  }

  return result;
};

const dfsRecur = (tree: TreeNode) => {
  const result: string[] = [];

  const dfsRecurHelper = (node: TreeNode) => {
    result.push(node.label);

    node.children?.forEach((child) => {
      dfsRecurHelper(child);
    });
  };

  dfsRecurHelper(tree);

  return result;
};

const bfs = (treeNode: TreeNode) => {
  const result: string[] = [];
  const queue: TreeNode[] = [treeNode];

  while (queue.length) {
    const toQueue: TreeNode[] = [];

    while (queue.length > 0) {
      const node = queue.shift();
      result.push(node.label);
      toQueue.push(...(node.children || []));
    }

    queue.push(...toQueue);
  }

  return result;
};

describe('funkyTree functions', () => {
  it('should work', () => {
    expect(bfs(sampleTree[0])).toMatchInlineSnapshot(`
Array [
  "1",
  "1.1",
  "1.2",
  "1.3",
  "1.1.1",
  "1.3.1",
]
`);

    expect(dfsIter(sampleTree[0])).toMatchInlineSnapshot(`
Array [
  "1",
  "1.1",
  "1.1.1",
  "1.2",
  "1.3",
  "1.3.1",
]
`);

    expect(dfsRecur(sampleTree[0])).toMatchInlineSnapshot(`
Array [
  "1",
  "1.1",
  "1.1.1",
  "1.2",
  "1.3",
  "1.3.1",
]
`);
  });
});
