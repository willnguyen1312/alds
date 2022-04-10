import { TreeNode, findKthSmallestBSTIter } from './findKthSmallestBST';

describe('findKthSmallestBSTIter function', () => {
  it('should work', () => {
    const node1 = new TreeNode(1);
    const node2 = new TreeNode(3);
    const root = new TreeNode(2, node1, node2);

    expect(findKthSmallestBSTIter(root, 2)).toEqual(root);
  });
});
