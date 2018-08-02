const React = {
  createELement
}

const ReactDOM = {
  render: (vnode, container) => {
    return render(vnode, container)
  }
}

function render(vnode, container) {
  console.log(vnode)
  if(typeof vnode === 'string') {
    const textNode = document.createTextNode(vnode)
    return container.appendChild(textNode, container)
  }
  if(vnode.attrs) {
    Object.keys(vnode.attrs).forEach(key => {
      if (key === 'className') key = 'class'
      dom.setAttribute(key, vnode.attr[key])
    })
  }
  const dom = document.createElement(vnode.tag)
  vnode.children.forEach(child => render(child, dom))
  return container.appendChild(dom)
}

function  createELement(tag, attrs, ...children) {
  return {
    tag,
    attrs,
    children
  }
}


const element = (
  <div>
    hello
    <span>world</span>
  </div>
)

// console.log(element)

ReactDOM.render(
  <h1>Hello World</h1>,
  document.getElementById('root')
)
