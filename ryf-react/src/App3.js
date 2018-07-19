import React, { Component } from 'react';
import './App.css';

class NoteList extends Component {
  render () {
    return (
      <ol>
         /*类似于slot 存放组件里面的内容*/
        {this.props.children.map((child, index )=> <li key={index}>{child}</li>)}   
      </ol>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <NoteList>
          <span>Hello</span>
          <span>world</span>
        </NoteList>
      </div>
    );
  }
}

export default App;
