const assert = require('assert')
const { EventEmitter } = require('../lib')

describe('EventEmitter', () => {
  const emitter = new EventEmitter({
    foo: (...params) => params,
    bar: (param) => param
  })
  it('should pass correct params when emit', () => {
    assert.deepStrictEqual(emitter.emit('foo', 1, 2, 3), [1, 2, 3])
  })
})
