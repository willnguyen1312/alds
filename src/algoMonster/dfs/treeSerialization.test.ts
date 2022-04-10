import { serialize, deserialize, TreeNode } from './treeSerialization';

describe('treeSerialization function', () => {
  it('should work', () => {
    const root = new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3)),
      new TreeNode(4)
    );

    const serialized = serialize(root);
    const deserialized = deserialize(serialized);

    expect(serialized).toEqual('1 2 3 x x x 4 x x');
    expect(deserialized).toEqual(root);
  });
});
