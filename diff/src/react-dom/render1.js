import { setAttribute } from './dom.js'
import Component from '../react/component.js'
/**
 * 将虚拟 DOM 解析成真实 DOM
 * @params vnode 虚拟 DOM
 * @return 返回 DOM
 */

function _render(vnode) {
  console.log(vnode)
  // 1. 通过递归实现 vnode => DOM, 子结点用递归, 出口是文本结点
  // 2. 节点类型有三种情况： 文本结点( return createTextNode() )、标签结点 createElement attrs 递归子结点 _render(children)
  //                       Component 每个组件内部一定会实现一个render方法 返回jsx render()

  if(vnode === undefined || vnode === null || typeof vnode === 'boolean') vnode ='';

  if(typeof vnode === 'number') {
    console.log(vnode)
    vnode = Sting(vnode)
  }

  if(typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode)
    return textNode
  }

  // Counter 不是正常标签 Component vnode.tag = function Counter(){}
  if(typeof vnode.tag === 'function') {
    // console.log(vnode)
    // return document.createTextNode('component')
    const component = createComponent(vnode.tag, vnode.attrs)
    setComponentProps(component, vnode.attrs)
    return component.base
  }
  const dom = document.createElement(vnode.tag)
  if(vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key]
      setAttribute(dom, key, value)
    })
  }

  if(vnode.children) {
    vnode.children.forEach(child => render(child, dom))
  }
  return dom
}

function setComponentProps(component, props) {
  component.props = props
  renderComponent(component)
}
// 将component 里的 JSX 转为真实的DOM 同时还会在 setState时调用
export function renderComponent(component) {
  let base  // jsx => DOM
  // 获得组件里面的 JSX
  const renderer = component.render()
  // 按照_render对 vnode 进行解析
  base = _render(renderer)

  // base DOM结点对象
  // 非第一次渲染组件
  if(component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base)
  }
  component.base = base
  base._component = component
}

function createComponent(component, props) {
  // instance
  let inst
  // 是一个函数
  if(component.prototype && component.prototype.render) {
    inst = new Component(props)
  } else {
    inst = new Component(props)
    inst.constructor = component
    inst.render = function () {
      return this.constructor(props)
    }
  }
  return inst
}

export function render(vnode, container) {
  // console.log(vnode, container)
  return container.appendChild(_render(vnode))
}

