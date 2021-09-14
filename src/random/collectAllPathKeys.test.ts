import { collectAllPathKeys } from './collectAllPathKeys';

describe.only('collectAllPathKeys', () => {
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
Array [
  "propA",
  "propB",
  0,
  1,
  "propC",
]
`);
  });
});
