import { BinaryTreeNode, flattenBST } from './flattenBST';

describe('flattenBST function', () => {
  it('should work', () => {
    const n5 = new BinaryTreeNode(5);
    const n4 = new BinaryTreeNode(4);
    const n3 = new BinaryTreeNode(3, n4);
    const n2 = new BinaryTreeNode(2, n5);
    const n1 = new BinaryTreeNode(1, n2, n3);
    flattenBST(n1);
    console.log(n1);
  });
});
