const assert = require('assert')
const { get } = require('../lib')

describe('get', () => {
  const source = { a: { b: { c: [{ d: { e: 1 } }] } } }
  it('should equal when use string', () => {
    assert.strictEqual(get(source, 'a.b.c.0.d'), source.a.b.c[0].d)
  })
  it('should equal when use array', () => {
    assert.strictEqual(
      get(source, ['a', 'b', 'c', '0', 'd']),
      source.a.b.c[0].d
    )
  })
})
