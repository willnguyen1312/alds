import {
  BinaryTreeNode,
  determineHeightBalanced,
} from './determineHeightBalanced';

describe('determineHeightBalanced function', () => {
  it('should work', () => {
    const n4 = new BinaryTreeNode(4);
    const n3 = new BinaryTreeNode(3);
    const n2 = new BinaryTreeNode(2, n4);
    const n1 = new BinaryTreeNode(1, n2, n3);

    expect(determineHeightBalanced(n1)).toBe(true);

    const n5 = new BinaryTreeNode(1, n2);
    expect(determineHeightBalanced(n5)).toBe(false);
  });
});
