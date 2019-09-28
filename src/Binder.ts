interface IComponentInstance {
  state: object
  setState: (obj: object) => void
}

/**
 * React controlled form component value binder
 * @export
 * @class Binder
 */
export class Binder {
  /**
   * component this
   * @type {IComponentInstance}
   * @memberof Binder
   */
  componentInstance: IComponentInstance
  constructor(componentInstance: IComponentInstance) {
    this.componentInstance = componentInstance
  }
  /**
   * bind value and onChange
   * @param {string} prop
   * @returns {{ value: string, onChange: (event: Event) => void }}
   * @memberof Binder
   */
  value(prop: string) {
    return {
      value: this.componentInstance.state[prop],
      onChange: (event: any) => {
        this.componentInstance.setState({
          [prop]: event.target.value
        })
      }
    }
  }
  /**
   * bind checked and onChange
   * @param {string} prop
   * @returns {{ checked: boolean, onChange: (event: Event) => void }}
   * @memberof Binder
   */
  checked(prop: string) {
    return {
      checked: this.componentInstance.state[prop],
      onChange: (event: any) => {
        this.componentInstance.setState({
          [prop]: event.target.checked
        })
      }
    }
  }
}
