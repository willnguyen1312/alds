import { getPaths } from './getPaths';

describe.only('getPaths', () => {
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
    expect(getPaths(input, (prop) => prop === 'x')).toEqual([
      'propA',
      'propB.0',
      'propB.1.propC',
    ]);
  });
});
