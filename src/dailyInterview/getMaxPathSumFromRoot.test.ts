import { BinaryTreeNode, getMaxPathSumFromRoot } from './getMaxPathSumFromRoot';

describe('getMaxPathSumFromRoot', () => {
  it('should work', () => {
    const tree = new BinaryTreeNode(1);
    tree.left = new BinaryTreeNode(3);
    tree.right = new BinaryTreeNode(2);
    tree.right.left = new BinaryTreeNode(4);
    tree.left.right = new BinaryTreeNode(5);

    const actual = getMaxPathSumFromRoot(tree);
    expect(actual).toEqual([1, 3, 5]);
  });
});
