import {
  BinaryTreeNode,
  mostFrequentSubTreeSum,
} from './mostFrequentSubTreeSum';

describe('mostFrequentSubTreeSum function', () => {
  it('should work', () => {
    const root = new BinaryTreeNode(3);
    root.left = new BinaryTreeNode(1);
    root.right = new BinaryTreeNode(-3);
    expect(mostFrequentSubTreeSum(root)).toBe(1);
  });
});
