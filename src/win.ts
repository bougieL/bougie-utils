interface IUnknownPlatform {
  setTimeout: () => undefined
  clearTimeout: () => undefined
}

export const win: NodeJS.Global | Window | IUnknownPlatform = (() => {
  if (typeof window !== 'undefined') {
    return window
  } else if (typeof global !== 'undefined') {
    return global
  } else {
    return {
      setTimeout: () => {},
      clearTimeout: () => {}
    } as IUnknownPlatform
  }
})()
