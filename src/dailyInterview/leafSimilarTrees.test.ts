import { BinaryTreeNode, leafSimilarTrees } from './leafSimilarTrees';

describe('leafSimilarTrees function', () => {
  it('should work', () => {
    const t1 = new BinaryTreeNode(3);
    t1.left = new BinaryTreeNode(5);
    t1.right = new BinaryTreeNode(1);
    t1.left.left = new BinaryTreeNode(6);
    t1.left.right = new BinaryTreeNode(2);

    const t2 = new BinaryTreeNode(7);
    t2.left = new BinaryTreeNode(2);
    t2.right = new BinaryTreeNode(1);
    t2.left.left = new BinaryTreeNode(6);
    t2.left.right = new BinaryTreeNode(2);

    const actual = leafSimilarTrees(t1, t2);
    expect(actual).toBe(true);
  });
});
