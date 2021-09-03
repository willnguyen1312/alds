import {
  BinaryTreeNode,
  levelOrderTraversalBST,
} from './levelOrderTraversalBST';

describe('levelOrderTraversalBST function', () => {
  it('should work', () => {
    const root = new BinaryTreeNode(
      1,
      new BinaryTreeNode(2),
      new BinaryTreeNode(3, new BinaryTreeNode(4), new BinaryTreeNode(5))
    );
    expect(levelOrderTraversalBST(root)).toEqual([1, 2, 3, 4, 5]);
  });
});
