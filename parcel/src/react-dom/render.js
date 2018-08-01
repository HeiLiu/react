import { setAttribute } from './dom.js'

function _render(vnode) {
    if (typeof vnode === 'string') {
        const textNode = document.createTextNode(vnode)
        return textNode
    }
    if (typeof vnode.tag === 'function') {
      // 在 jsx 里面 组件<Counter/>就是一个标签  
      // 普通标签就会来到 _render 但是这个标签不是普通标签， tramsform-react-jsx 将它解析成一个 函数 => Component
      // 实例化， 生成周期， render方法
      console.log(vnode)
      const component = createComponent(vnode.tag, vnode.attrs)
      setComponentProps(component, vnode.attrs)
      // return document.createTextNode('组件')
      return component.base
    }

    const dom = document.createElement(vnode.tag)

    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            // if (key === 'className') key = 'class'
            // dom.setAttribute(key, vnode.attrs[key])
            // 换一种想法 不是简单的 setAttribute 而是 onClick className {obj}
            const value = vnode.attrs[key]
            setAttribute(dom, key, value)
        })
    }

    vnode.children.forEach(child => render(child, dom))

    return dom
}

function createComponent(component, props) {
  let inst
  if (component.prototype && component.prototype.render) {
    inst = new component(props)
  }
  return inst
}
function setComponentProps(component, props) {
  renderComponent(component)
}
export function renderComponent(component) {
  let base
  const renderer = component.render()
  base = _render(renderer)
  component.base = base
}

export function render(vnode, container) {
    return container.appendChild(_render(vnode))
}
