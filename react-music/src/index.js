import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from '@/components/App'; 根组件
// redux  state, actions 就是props, 没有直接的map => mapState 提出将组件分成两部分
// 原来的 UI 组件部分保留 新增一个 container 容器
// redux 将数据给container container 再将数据给component
import Root from '@/components/Root'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
