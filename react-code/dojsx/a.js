'use strict';

var React = {
  createELement: createELement
};

var ReactDOM = {
  render: function render(vnode, container) {
    return _render(vnode, container);
  }
};

function _render(vnode, container) {
  console.log(vnode);
  if (typeof vnode === 'string') {
    var textNode = document.createTextNode(vnode);
    return container.appendChild(textNode, container);
  }
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach(function (key) {
      if (key === 'className') key = 'class';
      dom.setAttribute(key, vnode.attr[key]);
    });
  }
  var dom = document.createElement(vnode.tag);
  vnode.children.forEach(function (child) {
    return _render(child, dom);
  });
  return container.appendChild(dom);
}

function createELement(tag, attrs) {
  for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return {
    tag: tag,
    attrs: attrs,
    children: children
  };
}

var element = React.createELement(
  'div',
  null,
  'hello',
  React.createELement(
    'span',
    null,
    'world'
  )
);

// console.log(element)

ReactDOM.render(React.createELement(
  'h1',
  null,
  'Hello World'
), document.getElementById('root'));
