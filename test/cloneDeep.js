const assert = require('assert')
const { cloneDeep } = require('../lib')

describe('cloneDeep', () => {
  const source = [{ a: { b: [1] } }, { d: 2 }]
  const target = cloneDeep(source)
  it('should change reference when clone nested object', () => {
    assert.notStrictEqual(source[0]['a'], target[0]['a'])
  })
  it('should deep equal when clone nested object', () => {
    assert.deepStrictEqual(source, target)
  })
})
