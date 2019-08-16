import React, {Component} from 'react';
// 函数组件的声明方式
// import ReactDom from 'react-dom';

// function Clock(props) {
//   return (
//       <div>
//         <h1>react Clock, Time Flying!!</h1>
// 				<h2>It's at {props.date.toLocaleTimeString()}.</h2>
//       </div>
//   );
// }
// class 组件的声明方式 用 props 来调用父类的构造函数
class Clock extends Component{
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		this.timer = setInterval(() => 
      this.tick(),
    1000)
	}

	componentWillUnmount() {
    clearInterval(this.timer);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }

	render() {
		return (
			<div>It's at {this.state.date.toLocaleTimeString()}</div>
		);
	}
}

export default Clock;