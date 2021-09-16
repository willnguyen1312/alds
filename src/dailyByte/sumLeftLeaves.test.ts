import { BinaryTreeNode, sumLeftLeaves } from './sumLeftLeaves';

describe('sumLeftLeaves function', () => {
  it('should work', () => {
    const node = new BinaryTreeNode(5);
    node.left = new BinaryTreeNode(2);
    node.right = new BinaryTreeNode(12);
    node.right.left = new BinaryTreeNode(3);
    node.right.right = new BinaryTreeNode(8);

    const actual = sumLeftLeaves(node);
    expect(actual).toBe(5);
  });
});
