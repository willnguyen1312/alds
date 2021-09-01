import {
  BinaryTreeNode,
  countNumberOfUnivalSubtrees,
} from './countNumberOfUnivalSubtrees';

describe('countNumberOfUnivalSubtrees function', () => {
  it('should work', () => {
    const a = new BinaryTreeNode(0);
    a.left = new BinaryTreeNode(1);
    a.right = new BinaryTreeNode(0);
    a.right.left = new BinaryTreeNode(1);
    a.right.right = new BinaryTreeNode(0);
    a.right.left.left = new BinaryTreeNode(1);
    a.right.left.right = new BinaryTreeNode(1);

    expect(countNumberOfUnivalSubtrees(a)).toBe(5);
  });
});
