import { zigZagTraversal, TreeNode } from './zigzagLevelTraversal';

describe('zigZagTraversal function', () => {
  it('should work', () => {
    const root = new TreeNode(
      10,
      new TreeNode(11, new TreeNode(15)),
      new TreeNode(12, new TreeNode(16))
    );
    expect(zigZagTraversal(root)).toEqual([[10], [12, 11], [15, 16]]);
  });
});
