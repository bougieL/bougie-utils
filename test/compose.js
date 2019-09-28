const assert = require('assert')
const { compose } = require('../lib')

describe('compose', () => {
  it('should result equal when compose functions', () => {
    const func = (n) => n + 1
    const source = func(func(func(1)))
    const target = compose(
      func,
      func,
      func
    )(1)
    assert.strictEqual(source, target)
  })
})
