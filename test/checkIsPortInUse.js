const assert = require('assert')
const { checkIsPortInUse } = require('../lib')

describe('checkIsPortInUse', () => {
  it('should resolve when port unused', async () => {
    const func = (n) => n + 1
    const source = func(func(func(1)))
    const target = compose(func, func, func)(1)
    assert.strictEqual(source, target)
  })
})
