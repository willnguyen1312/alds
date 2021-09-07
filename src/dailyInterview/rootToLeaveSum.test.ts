import { BinaryTreeNode, rootToLeaveSum } from './rootToLeaveSum';

describe('rootToLeaveSum function', () => {
  it('should work', () => {
    const n5 = new BinaryTreeNode(5);
    const n4 = new BinaryTreeNode(4);
    const n3 = new BinaryTreeNode(3);
    const n2 = new BinaryTreeNode(2, n4, n5);
    const n1 = new BinaryTreeNode(1, n2, n3);
    const actual = rootToLeaveSum(n1);
    expect(actual).toBe(262);
  });
});
