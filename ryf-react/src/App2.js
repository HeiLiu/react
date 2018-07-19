import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const names = ['a', 'b', 'c']
    return (
      <div className="App">
        <ul>
          {
            names.map((name,index)=> {
             return <div key={index}> Hello, {name} </div>
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
