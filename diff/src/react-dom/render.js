import { setAttribute } from './dom.js'
import Component from '../react/component.js';
/**
 * 将虚拟DOM 变真实DOM
 * @params vnode 虚拟DOM, 
 * @return 返回DOM
 */

function _render (vnode) {
  // console.log(vnode);
  // return document.createTextNode('render');
  // 1. 递归 将结点转成dom ,子结点递归，出口就是文本结点
  // 2. 节点类型 三种： 
  // 文本结点 return createTextNode()
  // 标签结点 createElement attr chilren设置（递归_render）
  // 3. Component render(return jsx)
  // render()
  if (vnode === undefined || vnode === null || typeof vnode === 'boolean')
  vnode = '';
  
  if (typeof vnode === 'number') {
    console.log(vnode);
    vnode = String(vnode);
  }

  if (typeof vnode === 'string') {
    let textNode = document.createTextNode(vnode);
    return textNode;
  }
  // <Counter />  不是正常标签, vnode.tag= function Counter(){}
  if (typeof vnode.tag === 'function') {
    // console.log(vnode);
    // return document.createTextNode('component');
    const component = createComponent(vnode.tag, vnode.attrs);
    setComponentProps(component, vnode.attrs);
    return component.base;
  }

  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      const value = vnode.attrs[key];
      setAttribute(dom, key, value);
    })
  }

  if (vnode.children) {
    vnode.children.forEach(child => render(child, dom));
  }

  return dom;
}

function setComponentProps (component, props) {
  component.props = props;
  renderComponent(component);
}

// 将component里的jsx转为DOM 他还会在setState时调用 
export function renderComponent(component) {
  let base; //jsx=> DOM
  const renderer = component.render();
  base = _render(renderer);
  // 非第一次渲染组件
  if (component.base && component.base.parentNode) {
    component.base.parentNode.replaceChild(base, component.base)
  }
  component.base = base;
  base._component = component;
}

function createComponent(component, props) {
  let inst;
  if (component.prototype && component.prototype.render) {
    inst = new component(props);
  } else {
    inst = new Component(props);
    inst.constructor = component;
    inst.render = function() {
      return this.constructor(props);
    }  
  }
  return inst;
}
export function render(vnode, container) {
  return container.appendChild(_render(vnode));
}