import React, { Component } from 'react';
import './App.css';

class Hello extends Component {
  state = {
    opacity: 1.0
  }
  componentDidMount () {
    setInterval (() => {
      let opacity = this.state.opacity
      opacity -= 0.2 
      if(opacity < 0.1) {
        opacity = 1
      }
      this.setState({
        opacity
      })
    }, 1000)
  }
  render() {
    return (
      <div style={{opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
    );
  }
}

// 组件文字 每一秒透明度从 0 ~1
class App extends Component {

  render() {
    return (
      <div className="App">
        <Hello name="world"/>
      </div>
    );
  }
}

export default App;
