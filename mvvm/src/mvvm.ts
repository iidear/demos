import Compiler from './compiler'


export default class Mvvm {
  public el: any
  public data: any

  constructor(options: any) {
    this.el = options.el
    this.data = options.data
    this.observe(this, this.data)

    new Compiler(this.el)
  }

  observe(target: Mvvm, data:any) {
    for (let key in data) {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: true,
        get(): any {
          return data[key]
        },
        set(newVal: any) {
          console.log(`set ${key} to ${newVal}`)
          data[key] = newVal
        }
      })
    }
  }
}
