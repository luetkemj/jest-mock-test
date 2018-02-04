import * as module from './module';

module.lib.baz = jest.fn(() => 'bar');

describe('foo', () => {
  it('should work', () => {
    expect(module.foo()).toBe('bar');
  });
});
