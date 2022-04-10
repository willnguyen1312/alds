import { TreeNode, findAllRootToLeafPaths } from './findAllRootToLeafPaths';

describe('findAllRootToLeafPaths function', () => {
  it('should work', () => {
    const root = new TreeNode(1);
    root.children = [new TreeNode(3), new TreeNode(5), new TreeNode(7)];

    expect(findAllRootToLeafPaths(root)).toMatchInlineSnapshot(`
      [
        "1->3",
        "1->5",
        "1->7",
      ]
    `);
  });
});
