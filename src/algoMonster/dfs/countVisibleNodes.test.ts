import { countVisibleNodes, TreeNode } from './countVisibleNodes';

describe('countVisibleNodes function', () => {
  it('should work', () => {
    const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

    expect(countVisibleNodes(root)).toEqual(3);
  });
});
