import {
  BinaryTreeNode,
  checkIdenticalTreesIter,
  checkIdenticalTreesRecur,
} from './checkIdenticalTrees';

describe('checkIdenticalTrees function', () => {
  it('should work', () => {
    const firstA = new BinaryTreeNode(2);
    firstA.left = new BinaryTreeNode(1);
    firstA.right = new BinaryTreeNode(3);

    const firstB = new BinaryTreeNode(2);
    firstB.left = new BinaryTreeNode(1);
    firstB.right = new BinaryTreeNode(3);

    expect(checkIdenticalTreesIter(firstA, firstB)).toBe(true);
    expect(checkIdenticalTreesRecur(firstA, firstB)).toBe(true);

    const secondA = new BinaryTreeNode(1);
    firstA.right = new BinaryTreeNode(9);
    firstA.right.right = new BinaryTreeNode(18);

    const secondB = new BinaryTreeNode(1);
    secondB.left = new BinaryTreeNode(9);
    secondB.left.right = new BinaryTreeNode(18);

    expect(checkIdenticalTreesIter(secondA, secondB)).toBe(false);
    expect(checkIdenticalTreesRecur(secondA, secondB)).toBe(false);
  });
});
