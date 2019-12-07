const assert = require('assert')
const http = require('http')
const { checkIsPortUnUsed } = require('../lib')

describe('checkIsPortUnUsed', () => {
  it('should resolve true when port unused', (done) => {
    checkIsPortUnUsed(3000)
      .then((isPortUnUsed) => {
        console.log('isPortUnUsed', isPortUnUsed)
        assert.strictEqual(isPortUnUsed, true)
      })
      .finally(done)
  })
  it('should resolve false when port used', (done) => {
    const server = http.createServer()
    server.listen(3000, () => {
      checkIsPortUnUsed(3000)
        .then((isPortUnUsed) => {
          assert.strictEqual(isPortUnUsed, false)
        })
        .finally(() => {
          server.close()
          done()
        })
    })
  })
})
