const assert = require('assert')
const { throttle } = require('../lib')

describe('debounce', () => {
  it('should call one time in interval', (done) => {
    const waitTime = 60
    const realTime = 20
    let callCount = 0
    const func = () => {
      callCount++
    }
    const throttledFn = throttle(func, waitTime)
    assert.strictEqual(callCount, 0)
    let timer = null
    let count = 0
    const timerFn = () => {
      if (++count > 3) {
        clearTimeout(timer)
        setTimeout(() => {
          assert.strictEqual(callCount, 1)
          done()
        }, waitTime)
        return
      }
      timer = setTimeout(() => {
        throttledFn()
        timerFn()
      }, realTime)
    }
    timerFn()
  })
  it('should call multi times when more than interval', (done) => {
    const waitTime = 20
    const realTime = 30
    let callCount = 0
    const func = () => {
      callCount++
    }
    const throttledFn = throttle(func, waitTime)
    assert.strictEqual(callCount, 0)
    let timer = null
    let count = 0
    const timerFn = () => {
      if (++count > 6) {
        clearTimeout(timer)
        setTimeout(() => {
          assert.strictEqual(callCount, 6)
          done()
        }, waitTime)
        return
      }
      timer = setTimeout(() => {
        throttledFn()
        timerFn()
      }, realTime)
    }
    timerFn()
  })
})
