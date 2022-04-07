import { collectAllPathKeys } from './collectAllPathKeys';

describe('collectAllPathKeys', () => {
  it('should work', () => {
    const input = {
      foo: 'bar',
      propA: 'x',
      propB: [
        'x',
        {
          propC: 'x',
          propD: 'bar',
        },
        {
          propE: 'baz',
        },
      ],
    };

    const actual = collectAllPathKeys(input, (prop) => prop === 'x');
    expect(actual).toMatchInlineSnapshot(`
      [
        "propA",
        "propB",
        0,
        1,
        "propC",
      ]
    `);
  });
});
