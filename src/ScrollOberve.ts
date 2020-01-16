import { debounce } from './debounce'

export class ScrollObserve {
  private subscribers = new Map<number, Function>()
  private subscribeId = -1
  private debouncedDispatch: (event: UIEvent) => void
  private attachElement: Element | Document = document
  constructor(
    attachElement: Element | Document = document,
    delay: number = 300
  ) {
    this.attachElement = attachElement
    this.debouncedDispatch = debounce(this.dispatch.bind(this), delay) as (
      event: UIEvent
    ) => void
  }
  private register() {
    this.attachElement.addEventListener('scroll', this.debouncedDispatch)
  }
  private unregister() {
    this.attachElement.removeEventListener('scroll', this.debouncedDispatch)
  }
  private dispatch() {
    const child = this.attachElement.firstElementChild
    this.subscribers.forEach((func) => {
      func(child ? child.scrollTop : 0)
    })
  }
  public subscribe(func: Function) {
    if (this.subscribers.size === 0) {
      this.register()
    }
    this.subscribeId++
    this.subscribers.set(this.subscribeId, func)
    const child = this.attachElement.firstElementChild
    func(child ? child.scrollTop : 0)
    return this.subscribeId
  }
  public unsubscribe(subscribeId: number) {
    this.subscribers.delete(subscribeId)
    if (this.subscribers.size === 0) {
      this.unregister()
    }
  }
}
