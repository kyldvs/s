
jest.dontMock('../floydWarshall');

var floydWarshall = require('../floydWarshall');

describe('floydWarshall', () => {
  it('should detect negative cycles', () => {
    var d = floydWarshall([
      [0, -3],
      [1, 0],
    ]);

    expect(d).toEqual([
      [-Infinity, -Infinity],
      [-Infinity, -Infinity],
    ]);
  });
});
