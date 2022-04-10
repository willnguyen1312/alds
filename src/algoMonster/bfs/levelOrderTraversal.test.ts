import { levelOrderTraversal, TreeNode } from './levelOrderTraversal';

describe('levelOrderTraversal function', () => {
  it('should work', () => {
    const root = new TreeNode(10, new TreeNode(11), new TreeNode(12));
    expect(levelOrderTraversal(root)).toEqual([10, 11, 12]);
  });
});
