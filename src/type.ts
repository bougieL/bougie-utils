export const isString = (obj: any) => toString(obj) === '[object String]'

export const isNumber = (obj: any) => toString(obj) === '[object Number]'

export const isBoolean = (obj: any) => toString(obj) === '[object Boolean]'

export const isSymbol = (obj: any) => toString(obj) === '[object Symbol]'

export const isBigInt = (obj: any) => toString(obj) === '[object BigInt]'

export const isUndefined = (obj: any) => toString(obj) === '[object Undefined]'

export const isNull = (obj: any) => toString(obj) === '[object Null]'

export const isObject = (obj: any) => toString(obj) === '[object Object]'

export const isArray = (obj: any) => toString(obj) === '[object Array]'

export const isFunction = (obj: any) => toString(obj) === '[object Function]'

function toString(obj: Object): string {
  return Object.prototype.toString.call(obj)
}
