import { TreeNode, insertIntoBST } from './insertIntoBST';

describe('insertIntoBST function', () => {
  it('should work', () => {
    const root = new TreeNode(4, new TreeNode(3), new TreeNode(5));

    const result = insertIntoBST(root, 2);

    expect(result).toMatchInlineSnapshot(`
      TreeNode {
        "left": TreeNode {
          "left": TreeNode {
            "left": undefined,
            "right": undefined,
            "val": 2,
          },
          "right": undefined,
          "val": 3,
        },
        "right": TreeNode {
          "left": undefined,
          "right": undefined,
          "val": 5,
        },
        "val": 4,
      }
    `);
  });
});
