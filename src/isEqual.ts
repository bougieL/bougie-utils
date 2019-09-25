import { isArray, isObject } from './type'

export const isEqual = (source: any, target: any): boolean => {
  if (source === target) {
    return true
  }
  if (
    (isArray(source) && isArray(target)) ||
    (isObject(source) && isObject(target))
  ) {
    if (Object.keys(source).length !== Object.keys(target).length) {
      return false
    }
    for (const key in source) {
      if (target.hasOwnProperty(key)) {
        if (!isEqual(source[key], target[key])) {
          return false
        }
      } else {
        return false
      }
    }
    return true
  }
  return false
}
