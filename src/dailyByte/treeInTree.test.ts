import { BinaryTreeNode, treeInTree } from './treeInTree';

describe('treeInTree function', () => {
  it('should work', () => {
    const root = new BinaryTreeNode(
      1,
      new BinaryTreeNode(3),
      new BinaryTreeNode(8)
    );
    const sub = new BinaryTreeNode(1, null, new BinaryTreeNode(8));

    const actual = treeInTree(root, sub);
    expect(actual).toBe(false);
  });
});
