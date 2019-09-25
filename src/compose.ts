/**
 * compose multiple functions
 * funcA(funcB(funcC(params))) => compose(funcA, funcB, funcC)(params)
 * @param {...Function[]} funcs
 * @returns
 */
export const compose = (...funcs: Function[]): Function => {
  if (funcs.length === 0) {
    return <T>(arg: T) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args: any) => a(b(...args)))
}
