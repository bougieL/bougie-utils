const assert = require('assert')
const { dateFormat } = require('../lib')

describe('dateFormat', () => {
  const dateString = '2019-10-01 08:00:00'
  const dateObj = new Date(dateString)
  const timestamp = dateObj.getTime()
  const formatter = 'yyyy/MM/dd hh:mm:ss'
  const target = '2019/10/01 08:00:00'
  it('should equal when pass date string', () => {
    assert.strictEqual(dateFormat(dateString, formatter), target)
  })
  it('should equal when pass timestamp', () => {
    assert.strictEqual(dateFormat(timestamp, formatter), target)
  })
  it('should equal when pass date object', () => {
    assert.strictEqual(dateFormat(dateObj, formatter), target)
  })
})
