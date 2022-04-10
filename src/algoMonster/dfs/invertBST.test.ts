import { TreeNode, invertBST } from './invertBST';

describe('invertBST function', () => {
  it('should work', () => {
    const root = new TreeNode(3, new TreeNode(-5), new TreeNode(10));

    expect(invertBST(root)).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": undefined,
          "right": undefined,
          "val": 10,
        },
        "right": TreeNode {
          "left": undefined,
          "right": undefined,
          "val": -5,
        },
        "val": 3,
      }
    `);
  });
});
