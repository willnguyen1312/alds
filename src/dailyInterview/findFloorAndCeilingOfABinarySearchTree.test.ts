import {
  findCeil,
  findFloor,
  findFloorAndCeilingOfABinarySearchTree,
  BinaryTreeNode,
} from './findFloorAndCeilingOfABinarySearchTree';

describe('findFloorAndCeilingOfABinarySearchTree function', () => {
  it('should work', () => {
    const root = new BinaryTreeNode(8);
    root.left = new BinaryTreeNode(4);
    root.right = new BinaryTreeNode(12);

    root.left.left = new BinaryTreeNode(2);
    root.left.right = new BinaryTreeNode(6);

    root.right.left = new BinaryTreeNode(10);
    root.right.right = new BinaryTreeNode(14);

    expect(findFloorAndCeilingOfABinarySearchTree(root, 5)).toEqual([4, 6]);
    expect(findCeil(root, 5)).toBe(6);
    expect(findFloor(root, 5)).toBe(4);
  });
});
