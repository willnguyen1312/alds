import { BinaryTreeNode, splitTree } from './splitTree';

describe('splitTree function', () => {
  it('should work', () => {
    const n2 = new BinaryTreeNode(2);
    const n1 = new BinaryTreeNode(1, undefined, n2);
    const n5 = new BinaryTreeNode(5);
    const n4 = new BinaryTreeNode(4, undefined, n5);
    const root = new BinaryTreeNode(3, n1, n4);

    const actual = splitTree(root, 2);

    expect(actual).toMatchInlineSnapshot(`
Array [
  BinaryTreeNode {
    "data": 1,
    "left": undefined,
    "right": BinaryTreeNode {
      "data": 2,
      "left": undefined,
      "right": undefined,
    },
  },
  BinaryTreeNode {
    "data": 3,
    "left": undefined,
    "right": BinaryTreeNode {
      "data": 4,
      "left": undefined,
      "right": BinaryTreeNode {
        "data": 5,
        "left": undefined,
        "right": undefined,
      },
    },
  },
]
`);
  });
});
