# 虚拟DOM (virtual DOM)  
mvvm 封装了DOM层  
DOM 操作内存消耗太大  

VNode + diff 算法来解决  

React 的 JSX 语法  

用js对象来描述 html结构  

JSX 的背后隐含着VNode 的真相N 

## 虚拟DOM 真实DOM 结点的Object 描述  

```js
<h1 className="title">标题</h1>
VNode = {
  tag: "h1",
  attrs: {
    class: "title",
  },
  children: [
    '标题',
    ...childrenNode
  ]
}


<h1 className="title">hello world</h1>
  React.createElement(
    "h1",    
    {className: "title"},
    "hello world"
  )
  <!-- 解析 -->
  ele = document.createElement()
  attributes 第二个参数 ele.setAttribute(key, val)
  children 第三个参数 
    文本结点 textnode  
    node 递归一下
```

npm init -y
yarn add babel-cli babel-core babel-preset-env babel-preset-react


## dojsx

babel index.js -o a.js

