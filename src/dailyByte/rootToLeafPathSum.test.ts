import { BinaryTreeNode, rootToLeafPathSum } from './rootToLeafPathSum';

describe('rootToLeaf function', () => {
  it('should work', () => {
    const node = new BinaryTreeNode(8);
    node.left = new BinaryTreeNode(2);
    node.left.left = new BinaryTreeNode(4);
    node.right = new BinaryTreeNode(29);
    node.right.left = new BinaryTreeNode(3);
    node.right.right = new BinaryTreeNode(9);

    const actual = rootToLeafPathSum(node, 14);
    expect(actual).toBe(true);
  });
});
