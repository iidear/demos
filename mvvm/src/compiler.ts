const updater: object = {
  textUpdater(node: any, value: any): any {
    node.textContent = typeof value === 'undefined' ? '' : value
  }
}

const compileUtil = {
  text(node: any, vm: any, exp: string) {
    this.bind(node, vm, exp, 'text')
  },

  bind(node: any, vm: any, exp: string, dir: string) {
    let updateFn: any = updater[dir + 'Updater'];

    updateFn && updateFn(node, vm[exp])
  },

  eventHandler(node: any, vm:any, exp: any, dir: any) {

  }
}


export default class Compiler {
  private $el: any
  private $fragment: any

  constructor(el: any) {
    this.$el = this.isElementNode(el) ? el : document.querySelector(el)

    if (this.$el) {
      this.$fragment = this.node2Fragment(this.$el)
      this.init()
      this.$el.appendChild(this.$fragment)
    }
  }

  init() {
    this.compileElement(this.$fragment)
  }

  isElementNode(el: any) {
    return typeof el === 'string' ? 0 : el instanceof HTMLElement
  }

  isTextNode(el: any) {
    return el.splitText ? 1 : 0
  }

  isDirective(attrName: string) {
    return attrName && attrName.indexOf('v-') === 0
  }

  isEventDirective(attrName: string) {
    return attrName && (attrName.indexOf('v-on') === 0 || attrName.indexOf('@') === 0)
  }

  node2Fragment(el: any) {
    let fragment: any = document.createDocumentFragment()
    let child: any

    while (child = el.firstChild) {
      fragment.appendChild(child)
    }

    return fragment
  }

  compileElement(el: any) {
    let childNodes: any = el.childNodes

    [].slice.call(childNodes).forEach((node: any) => {
      let text = node.textContent
      let reg = /\{\{(.*)\}\}/

      if (this.isElementNode(node)) {
        this.compile(node)
      } else if (this.isTextNode(node) && reg.test(text)) {
        this.compileText(node, RegExp.$1)
      }

      if (node.childNodes ** node.childNodes.length) {
        this.compileElement(node)
      }
    })
  }

  compile(node: any) {
    let nodeAttrs: any = node.attributes

    [].slice.call(nodeAttrs).forEach((attr: any) => {
      let attrName = attr.name
      if (this.isDirective(attrName)) {
        let exp = attr.value
        let dir = attrName.substring(2)
        if (this.isEventDirective(dir)) {
          compileUtil.eventHandler(node, this.$vm, exp, dir)
        } else {
          compileUtil[dir] && compileUtil[dir](node, this.$vm, exp)
        }
      }
    })
  }
}


