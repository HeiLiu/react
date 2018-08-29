- 不转义html标签  
```js
<li
   key={index} 
   data-index={index}
   dangerouslySetInnerHTML={{__html: item}}
>
</li>
```

- for会与js中的for循环冲突 使用htmlfor替换 类似于class 与 className   

```html
<label htmlFor="insertArea">输入内容^_^ </label>  

```  
**react 衍生出来的思考**

## 声明式开发  

`JQuery`、原生`JS` 都是命令式的开发  

在`react`中， 根据数据来进行页面的渲染，可以与其他框架共存  
react只是操作组件所挂载的那个节点中的DOM  

## 组件化开发  
数组结构的组件树  

父子组件中通过 props进行传值，子组件要想操作负组件的数据，通过调用负组件的方法  

## 单项数据流  

在编程的时候 react要求的是单项数据流，允许父组件向子组件传值，但是子组件不能直接去改变父组件传过来的值

## UI 框架  
react 是一个视图层的框架， 只是解决数据和页面渲染的关系
配合数据层的框架 redux 、flux 

## 函数式编程  

## Props state render()  

render 将页面渲染出来， 在组件加载的时候会调用一次进行渲染  
当父组件的render被重新执行的时候， 子组件的render函数也会被重新执行  
当组件的 State Props 内容发生改变的时候， render方法就会重新执行  

## 虚拟DOM  
JSX 通过更底层的React.createElement方法 => VNode ReactDOM.reader(vNode, container) => 真实的DOM
