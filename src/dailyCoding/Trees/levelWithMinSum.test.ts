import { BinaryTreeNode, levelWithMinSum } from './levelWithMinSum';

describe('levelWithMinSum function', () => {
  it('should work', () => {
    const node = new BinaryTreeNode(1);
    node.left = new BinaryTreeNode(2);
    node.right = new BinaryTreeNode(3);
    node.right.left = new BinaryTreeNode(4);
    node.right.right = new BinaryTreeNode(5);

    const actual = levelWithMinSum(node);
    expect(actual).toBe(0);
  });
});
