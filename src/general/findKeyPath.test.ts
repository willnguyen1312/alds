import { findKeyPath1, findKeyPath2, findKeyPath3 } from './findKeyPath';

const objectMock = {
  propA: 'foo',
  propB: 'bar',
  propC: [
    'foo',
    {
      abcd: 'bar',
      bar: 'foo',
    },
    {
      abc: 'bar',
      bar: 'foo',
      propE: [
        {
          abc: 'bar',
        },
        'foo',
        {
          propE: 'foo',
        },
      ],
      propF: {
        bar: 'foo',
        abc: 'bar',
      },
    },
  ],
};

test('the data is empty', () => {
  const data = {
    obj: objectMock,
    valueMatch: 'foo',
  };
  expect(findKeyPath1(data)).toMatchInlineSnapshot(`
    [
      "propA",
      "propC.0",
      "propC.1.bar",
      "propC.2.bar",
      "propC.2.propE.1",
      "propC.2.propE.2.propE",
      "propC.2.propF.bar",
    ]
  `);
  expect(findKeyPath2(data)).toMatchInlineSnapshot(`
    [
      "propA",
      "propC.0",
      "propC.2.bar",
      "propC.2.propF.bar",
      "propC.2.propE.1",
      "propC.2.propE.2.propE",
      "propC.1.bar",
    ]
  `);

  expect(findKeyPath3(data)).toMatchInlineSnapshot(`
    [
      "propA",
      "propC.0",
      "propC.1.bar",
      "propC.2.bar",
      "propC.2.propE.1",
      "propC.2.propE.2.propE",
      "propC.2.propF.bar",
    ]
  `);
});
