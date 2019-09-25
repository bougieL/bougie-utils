import { isArray } from './type'

export const set = (obj: object, path: string[] | string, value: any): void => {
  let i
  path = isArray(path) ? path : (path as string).split('.')
  for (i = 0; i < path.length - 1; i++) {
    obj = obj[path[i]]
  }
  obj[path[i]] = value
}
