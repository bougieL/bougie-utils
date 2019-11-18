interface IResponsiveMap {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  xxl?: string
}

const defaultResponsiveMap = {
  xs: `(max-width: 576px)`,
  sm: `(min-wdth: 576px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 992px)`,
  xl: `(min-width: 1200px)`,
  xxl: `(min-width: 1600px)`
}

export class ResponsiveObserve {
  private subscribeId = -1
  private responsiveMap: IResponsiveMap
  private subscribers = new Map<number, Function>()
  private currentScreen = ''
  private mediaListeners: Array<{ media: any; listener: Function }> = []
  constructor(responsiveMap: IResponsiveMap = defaultResponsiveMap) {
    this.responsiveMap = responsiveMap
  }
  private register() {
    Object.keys(this.responsiveMap).forEach((screen) => {
      const mediaQuery = this.responsiveMap[screen]
      const media = window.matchMedia(mediaQuery)
      const listener = (params: any) => {
        if (params.matches) {
          this.dispatch(screen)
        }
      }
      listener(media)
      media.addListener(listener)
      this.mediaListeners.push({
        media,
        listener
      })
    })
  }
  private unregister() {
    this.mediaListeners.forEach(({ media, listener }) => {
      media.removeListener(listener)
    })
  }
  private dispatch(screen: string) {
    this.currentScreen = screen
    this.subscribers.forEach((func) => {
      func(screen)
    })
  }
  public subscribe(func: Function) {
    if (this.subscribers.size === 0) {
      this.register()
    }
    this.subscribeId++
    this.subscribers.set(this.subscribeId, func)
    func(this.currentScreen)
    return this.subscribeId
  }
  public unsubscribe(subscribeId: number) {
    this.subscribers.delete(subscribeId)
    if (this.subscribers.size === 0) {
      this.unregister()
    }
  }
}
