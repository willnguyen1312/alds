import { BinaryTreeNode, getBound } from './getBound';

describe('getBound function', () => {
  it('should work', () => {
    const node = new BinaryTreeNode(7);
    node.left = new BinaryTreeNode(5);
    node.right = new BinaryTreeNode(10);
    node.right.right = new BinaryTreeNode(25);
    node.left.left = new BinaryTreeNode(-1);
    node.left.right = new BinaryTreeNode(6);

    const actual = getBound(node, 5.5);
    expect(actual).toEqual([5, 6]);
  });
});
