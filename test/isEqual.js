const assert = require('assert')
const { isEqual } = require('../lib')

describe('isEqual', () => {
  describe('compare primitive types', () => {
    it('should return true when compare number', () => {
      assert.ok(isEqual(1, 1))
    })
    it('should return false when compare symbol', () => {
      assert.ok(!isEqual(Symbol(), Symbol()))
    })
  })
  describe('compare deep objects', () => {
    const obj1 = [{ a: { b: { c: [1] } } }]
    const obj2 = [{ a: { b: { c: [2] } } }]
    const obj3 = [{ a: { b: { c: [1] } } }]
    const obj4 = { 0: { a: { b: { c: [1] } } } }
    it('should return true when compare deep equal objects', () => {
      assert.ok(isEqual(obj1, obj3))
    })
    it('should return false when compare not deep equal objects', () => {
      assert.ok(!isEqual(obj1, obj2))
    })
    it('should return false when compare array and object', () => {
      assert.ok(!isEqual(obj1, obj4))
    })
  })
})
