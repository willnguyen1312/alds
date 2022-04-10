import { maxDepthOfBinaryTree, TreeNode } from './maxDepthOfBinaryTree';

describe('maxDepthOfBinaryTree', () => {
  it('should work', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(5)
    );

    expect(maxDepthOfBinaryTree(root)).toEqual(3);
  });
});
