import { BinaryTreeNode, sameLeavesBST } from './sameLeavesBST';

describe('sameLeavesBST function', () => {
  it('should work', () => {
    const node1 = new BinaryTreeNode(5);
    node1.left = new BinaryTreeNode(4);
    node1.right = new BinaryTreeNode(1);

    const node2 = new BinaryTreeNode(7);
    node2.left = new BinaryTreeNode(4);
    node2.right = new BinaryTreeNode(1);

    const actual = sameLeavesBST(node1, node2);
    expect(actual).toBe(true);
  });
});
