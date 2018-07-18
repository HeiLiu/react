import React, { Component } from 'react';
import Notes from './components/Notes.js';
import './App.css';

// .vue文件 三部分 template js style
// react .js 输出一个组件类 继承  
// 模板template jsx语法 在render里面
class App extends Component {
  render() {
    return (
      <Notes/>
    );
  }
}

export default App;
