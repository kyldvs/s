
jest.dontMock('../Tree');

// import Tree from '../Tree';
var Tree = require('../Tree');

describe('Tree', () => {
  it('idk', () => {
    var ATree = new Tree();
    expect(ATree.value).toBe(123);
  });
});
