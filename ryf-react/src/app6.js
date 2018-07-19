import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = {
    value: 'Hello!'
  }
  handleChange (event) {
    // this.state.value = event.target.value
    this.setState({
      value:event.target.value
    })
    
  }
  render() {
    const value = this.state.value
    return (
      <div className="App">
        <div>
          {/* 使用箭头函数规避掉bind(this) */}
          <input type="text" value={value} onChange={this.handleChange.bind(this)}/>
        </div>
        <p>{value}</p>
      </div>
    );
  }
}

export default App;
