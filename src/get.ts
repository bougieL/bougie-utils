import { isArray } from './type'

/**
 * get deep nested object value
 *
 * @param {object} obj
 * @param {(string[] | string)} path
 * @returns {*}
 */
export const get = (obj: object, path: string[] | string): any => {
  path = isArray(path) ? path : (path as string).split('.')
  const len = path.length
  for (let i = 0; i < len; i++) {
    obj = obj[path[i]]
  }
  return obj
}
