import { BinaryTreeNode, numberOfCousin } from './numberOfCousin';

describe('numberOfCousin function', () => {
  it('should work', () => {
    const root = new BinaryTreeNode(1);
    root.left = new BinaryTreeNode(2);
    root.left.left = new BinaryTreeNode(4);
    root.left.right = new BinaryTreeNode(6);
    root.right = new BinaryTreeNode(3);
    root.right.right = new BinaryTreeNode(5);
    expect(numberOfCousin(root, 1)).toEqual([]);
    expect(numberOfCousin(root, 3)).toEqual([]);
    expect(numberOfCousin(root, 5)).toEqual([4, 6]);
  });
});
