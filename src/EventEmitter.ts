interface IInitialEvents {
  [name: string]: Function
}

export class EventEmitter {
  private eventMap: Map<string, Function> = new Map()
  constructor(initialEvents: IInitialEvents) {
    this.eventMap = new Map(Object.entries(initialEvents))
  }
  on(name: string, func: Function) {
    this.eventMap.set(name, func)
    return {
      remove: () => {
        this.eventMap.delete(name)
      }
    }
  }
  un(name: string) {
    this.eventMap.delete(name)
  }
  clear() {
    this.eventMap.clear()
  }
  emit(name: string, ...params: any[]) {
    const func = this.eventMap.get(name)
    console.log(func)
    if (typeof func !== 'function') {
      throw new TypeError(`Get "${name}" is not a function.`)
    }
    return func.call(undefined, ...params)
  }
}
