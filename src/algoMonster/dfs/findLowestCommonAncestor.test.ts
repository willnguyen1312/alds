import { findLowestCommonAncestor, TreeNode } from './findLowestCommonAncestor';

describe('findLowestCommonAncestor function', () => {
  it('should work', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(2);
    const root = new TreeNode(0, node1, node2);

    expect(findLowestCommonAncestor(root, node1, node2)).toEqual(root);
  });
});
