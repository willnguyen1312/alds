import { BinaryTreeNode, maxSumBetweenTwoBST } from './maxSumBetweenTwoBST';

describe('maxSumBetweenTwo function', () => {
  it('should work', () => {
    const node = new BinaryTreeNode(3);
    node.left = new BinaryTreeNode(4);
    node.left.left = new BinaryTreeNode(5);
    node.left.right = new BinaryTreeNode(7);

    node.right = new BinaryTreeNode(3);
    node.right.left = new BinaryTreeNode(2);
    node.right.right = new BinaryTreeNode(1);

    const actual = maxSumBetweenTwoBST(node);
    expect(actual).toBe(11);
  });
});
