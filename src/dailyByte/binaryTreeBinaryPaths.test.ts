import { binaryTreeBinaryPaths, TreeNode } from './binaryTreeBinaryPaths';

describe('binaryTreeBinaryPaths function', () => {
  it('should work', () => {
    const root = new TreeNode(1, new TreeNode(1), new TreeNode(0));
    expect(binaryTreeBinaryPaths(root)).toBe(5);
  });
});
