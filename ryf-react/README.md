# 阮一峰 React-Demo  

- app1.js  

```js
  // 直接使用 jsx作为数组元素
  const arr =[
      <h1 key="1">Hey, your Girls</h1>,
      <h2 key="2">React is awesome</h2>
    ]
```  

- app2.js  


- app3.js  包含关系-嵌套传递子组件 children

    > 如同 vue-slot 
    ```js
    class App extends Component {
        render () {
            return (
                <div className="App">
                    <NoteList>
                        <span>hello</span>
                        <span>world</span>
                    </NoteList>
                </div>
            )
        }
    }
    ```
    ```js
    class NoteList extends Component {
        render () {
            return (
                <ul>{ this.props.children.map((child, index) => <li key={index}>{ child }</li>) }</ul>
            )
        }
    }
    ```

- app4.js 使用 PropTypes 进行类型检查  


- app5.js refs


- app6.js MVVM  

- app7.js Class 样式控制