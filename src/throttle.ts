import { win } from './win'

export const throttle = (func: Function, interval: number): Function => {
  let timeout: undefined | number | NodeJS.Timeout = undefined
  return function(...args: any[]) {
    if (!timeout) {
      timeout = win.setTimeout(() => {
        timeout = undefined
        func.apply(undefined, args)
      }, interval)
    }
  }
}
