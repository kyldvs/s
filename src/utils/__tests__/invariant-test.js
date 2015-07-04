
jest.dontMock('../invariant');

var invariant = require('../invariant');

describe('invariant', () => {
  it('throws an error when condition is false', () => {
    expect(() => invariant(false, 'Something'))
      .toThrow('Invariant Violation: Something');
  });

  it('does not throw an error when condition is truthy', () => {
    expect(() => invariant(true, 'Something')).not.toThrow();
  });
});
