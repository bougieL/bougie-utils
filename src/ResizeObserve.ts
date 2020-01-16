import { debounce } from './debounce'

export class ResizeObserve {
  private subscribers = new Map<number, Function>()
  private subscribeId = -1
  private debouncedDispatch: (event: UIEvent) => void
  constructor(delay: number = 300) {
    this.debouncedDispatch = debounce(this.dispatch.bind(this), delay) as (
      event: UIEvent
    ) => void
  }
  private register() {
    window.addEventListener('resize', this.debouncedDispatch)
  }
  private unregister() {
    window.removeEventListener('resize', this.debouncedDispatch)
  }
  private dispatch() {
    this.subscribers.forEach((func) => {
      func(window.innerWidth)
    })
  }
  public subscribe(func: Function) {
    if (this.subscribers.size === 0) {
      this.register()
    }
    this.subscribeId++
    this.subscribers.set(this.subscribeId, func)
    return this.subscribeId
  }
  public unsubscribe(subscribeId: number) {
    this.subscribers.delete(subscribeId)
    if (this.subscribers.size === 0) {
      this.unregister()
    }
  }
}
