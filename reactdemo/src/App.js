import React, { Component } from 'react';
import Clock from './components/clock';
import Menu from './components/menu';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      Num: 0,
      date: new Date()
    }
  }
  handleClick = () => {
    let num = Math.floor(Math.random()*10+1);
    this.setState({
      Num : num
    });
  }
  tick() {
    setInterval(() =>{
      this.setState({
        date: new Date()
      }, () => {
        console.log(this.state.date.toLocaleTimeString())
      })
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React. Hello world!</h2>
        </div>
        <p className="App-intro">
          <p>a random Number:{this.state.Num}<br /> click on change to change one</p>
          <p onClick={this.handleClick}>CHANGE</p>
          <Clock date={this.state.date}></Clock>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Menu />
      </div>
    );
  }
}

export default App;
