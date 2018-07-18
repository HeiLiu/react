# react
  > React迁移性学习  

## 脚手架安装   

```
  yarn global add  create-react-app 
  npm install  -g  create-react-app  
```

## 创建项目  

```
  create-react-app notes  
```  
```js
  // index.js

  import React from 'react';
  // react模板，react-dom 
  import ReactDOM from 'react-dom';
  // webpack 引入css
  import './index.css';
  import App from './App';
  import registerServiceWorker from './registerServiceWorker';
  // 将组件挂载到根节点上
  ReactDOM.render(<App />, document.getElementById('root'));
  registerServiceWorker();

``` 

```js

```  

### 事件
