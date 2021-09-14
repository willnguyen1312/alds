import { BinaryTreeNode, collectAllKeysBST } from './collectAllKeysBST';

describe.only('collectAllKeysBST', () => {
  it('should work', () => {
    const node = new BinaryTreeNode(5);
    node.left = new BinaryTreeNode(3);
    node.left.left = new BinaryTreeNode(1);
    node.left.right = new BinaryTreeNode(2);
    node.right = new BinaryTreeNode(7);
    node.right.right = new BinaryTreeNode(2.5);
    node.right.left = new BinaryTreeNode(1.5);

    const actual = collectAllKeysBST(node, (value) => value < 3);
    expect(actual).toMatchInlineSnapshot(`
Set {
  5,
  3,
  1,
  2,
  7,
  1.5,
  2.5,
}
`);
  });
});
