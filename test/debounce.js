const assert = require('assert')
const { debounce } = require('../lib')

describe('debounce', () => {
  it('should call one time when less than interval', (done) => {
    const waitTime = 30
    const realTime = 20
    let callCount = 0
    const func = () => {
      callCount++
    }
    const debouncedFn = debounce(func, waitTime)
    assert.strictEqual(callCount, 0)
    let timer = null
    let count = 0
    const timerFn = () => {
      if (++count > 10) {
        clearTimeout(timer)
        setTimeout(() => {
          assert.strictEqual(callCount, 1)
          done()
        }, waitTime)
        return
      }
      timer = setTimeout(() => {
        debouncedFn()
        timerFn()
      }, realTime)
    }
    timerFn()
  })
  it('should call multi times when more than interval', (done) => {
    const waitTime = 30
    const realTime = 30
    let callCount = 0
    const func = () => {
      callCount++
    }
    const debouncedFn = debounce(func, waitTime)
    assert.strictEqual(callCount, 0)
    let timer = null
    let count = 0
    const timerFn = () => {
      if (++count > 10) {
        clearTimeout(timer)
        setTimeout(() => {
          assert.strictEqual(callCount, 10)
          done()
        }, waitTime)
        return
      }
      timer = setTimeout(() => {
        debouncedFn()
        timerFn()
      }, realTime)
    }
    timerFn()
  })
})
