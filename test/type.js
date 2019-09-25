const assert = require('assert')
const type = require('../lib/type')

describe('type', () => {
  it('should be string', () => {
    assert.ok(type.isString(new String()))
  })
  it('should be number', () => {
    assert.ok(type.isNumber(new Number()))
  })
  it('should be boolean', () => {
    assert.ok(type.isBoolean(new Boolean()))
  })
  it('should be symbol', () => {
    assert.ok(type.isSymbol(Symbol()))
  })
  it('should be bigInt', () => {
    assert.ok(type.isBigInt(BigInt(1)))
  })
  it('should be undefined', () => {
    assert.ok(type.isUndefined(undefined))
  })
  it('should be null', () => {
    assert.ok(type.isNull(null))
  })
  it('should be object', () => {
    assert.ok(type.isObject(new Object()))
  })
  it('should be array', () => {
    assert.ok(type.isArray(new Array()))
  })
  it('should be function', () => {
    assert.ok(type.isFunction(new Function()))
  })
})
