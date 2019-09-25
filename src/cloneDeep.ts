import { isObject, isArray } from './type'

export const cloneDeep = <T>(source: T): T => {
  if (!(isObject(source) || isArray(source))) {
    return source
  }
  const target = (isObject(source) ? {} : []) as T
  for (const key in source) {
    target[key] = cloneDeep(source[key])
  }
  return target
}
