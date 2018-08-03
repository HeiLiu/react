# 虚拟结点
parcel ./index.html
通过入口文件index.html 进入 在按照资源加载顺序进行打包

jsx部分通过(react-jsx-plugin) createElement(jsx) => vnode  -> render => 真实的DOM

Component(render 的第三种方式， react-jsx 会将组件的tag 解析为 function Counter) -> 标签化的组件
-> Counter(extends) -> Component 类 -> render方法 里面的jsx -> ReactDOM.render()

## 响应式编程 setState()  
为了达到DOM的更新将整个DOM片段都进行替换（假设整个DOM树约100个结点）  
a. 新生成整个组件的DOM树 重新挂载 整个DOM树约100个DOM 结点    
b. 只将setState关联的那一小段DOM 在原来的DOM的基础上做一下修改， 将修改反映到DOM上 只需要修改一行  
html 树，重绘 DOM开销是一般计算开销的100-1000倍  
replaceChild就会引发一次DOM树重绘  
重排  

## React diff 算法  
需求： 减少DOM操作  
setState 找到对应的DOM部分  
setState 返回一个新的Virtual DOM   跟旧的 Vnode 进行对比  
将新的 内存中的 Vnode 跟旧的 Vnode 进行对比  
新旧Vnode 都是一个树 采用算法， 就可以比较出差一点， 在相差的地方， 进行真实的DOM操作

