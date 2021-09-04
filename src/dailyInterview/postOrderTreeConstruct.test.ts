import { postOrderTreeConstruct } from './postOrderTreeConstruct';

describe('postOrderTreeConstruct function', () => {
  it('should work', () => {
    expect(postOrderTreeConstruct([1, 3, 2])).toMatchInlineSnapshot(`
BinaryTreeNode {
  "data": 2,
  "left": BinaryTreeNode {
    "data": 1,
    "left": null,
    "right": null,
  },
  "right": BinaryTreeNode {
    "data": 3,
    "left": null,
    "right": null,
  },
}
`);
  });
});
