import { BinaryTreeNode, minDifferenceBST } from './minDifferenceBST';

describe('minDifferenceBST function', () => {
  it('should work', () => {
    const node = new BinaryTreeNode(29);
    node.left = new BinaryTreeNode(17);
    node.left.left = new BinaryTreeNode(1);
    node.right = new BinaryTreeNode(50);
    node.right.left = new BinaryTreeNode(42);
    node.right.right = new BinaryTreeNode(59);

    const actual = minDifferenceBST(node);
    expect(actual).toBe(8);
  });
});
