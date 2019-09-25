import { set } from './set'
import { get } from './get'
import { isFunction } from './type'

export const webpackMerge = (base: object, extend: object) => {
  const config = Object.assign({}, base)
  for (const key in extend) {
    const value = extend[key]
    const configValue = get(config, key)
    if (isFunction(value)) {
      set(config, key, value(configValue))
    } else {
      set(config, key, value)
    }
  }
  return config
}
