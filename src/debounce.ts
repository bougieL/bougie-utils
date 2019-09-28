import { win } from './win'

export const debounce = (func: Function, interval: number): Function => {
  let timeout: undefined | number & NodeJS.Timeout = undefined
  return function(...args: any[]) {
    if (timeout) win.clearTimeout(timeout)

    timeout = win.setTimeout(() => {
      func.apply(undefined, args)
    }, interval) as number & NodeJS.Timeout
  }
}
