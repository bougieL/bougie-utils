const assert = require('assert')
const { webpackMerge, cloneDeep } = require('../lib')

describe('webpackMerge', () => {
  const source = {
    a: {
      b: [1],
      c: 2
    },
    d: [3, 4],
    e: 5
  }
  const target = {
    a: {
      b: [1, 2],
      c: 2
    },
    d: [3, 4, 6],
    e: 5
  }
  it('should deep equal when rewrite', () => {
    const extend = {
      'a.b': [1, 2],
      d: [3, 4, 6]
    }
    assert.deepStrictEqual(webpackMerge(cloneDeep(source), extend), target)
  })
  it('should deep equal when update', () => {
    const extend = {
      'a.b': (prev) => [...prev, 2],
      d: (prev) => [...prev, 6]
    }
    assert.deepStrictEqual(webpackMerge(cloneDeep(source), extend), target)
  })
})
