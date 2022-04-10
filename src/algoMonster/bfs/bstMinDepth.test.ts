import { TreeNode, bstMinDepthBFS, bstMinDepthDFS } from './bstMinDepth';

describe('bstMinDepth function', () => {
  it('should work', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2),
      new TreeNode(3, new TreeNode(4), new TreeNode(5))
    );

    expect(bstMinDepthBFS(root)).toBe(1);
    expect(bstMinDepthDFS(root)).toBe(1);
  });
});
