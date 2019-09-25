const assert = require('assert')
const { cloneDeep, set } = require('../lib')

describe('set', () => {
  const source = { a: { b: { c: [{ d: { e: 1 } }] } } }

  it('should equal when use string', () => {
    const target = cloneDeep(source)
    set(target, 'a.b.c.0.d.e', 2)
    assert.strictEqual(target.a.b.c[0].d.e, 2)
  })
  it('should equal when use array', () => {
    const target = cloneDeep(source)
    set(target, ['a', 'b', 'c', '0', 'd', 'e'], 2)
    assert.strictEqual(target.a.b.c[0].d.e, 2)
  })
})
