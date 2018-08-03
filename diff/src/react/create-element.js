function createElement(tag, attrs, ...children) {
  // console.log(tag, attrs, children)
  // 为 render 提供虚拟节点的 json 对象
  attrs = attrs || {}
// console.log(attrs.key)
  return {
    tag,
    attrs,
    children,
    key: attrs.key || null
  }
}

export default createElement
