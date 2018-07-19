import React, { Component } from 'react';
import './App.css';

class LikeButton extends Component {
  state = {
    like: false
  }
  handleClick () {
    console.log(this)
    // this.setState({
    //   like: !this.state.like
    // })
    this.setState((preState) => {
     return {
       like: !preState.like
     }
    })
  }
  render() {
    const text = this.state.like ? 'Like' : 'Dislike'
    return (
      <p onClick={() => this.handleClick()}>
        You {text} this.click to toggle
      </p>
    )
  }
}

class App extends Component {
  handleClick () {
    this.refs.myTextInput.focus()
  }
  render() {
    return (
      <div className="App">
        <LikeButton/>
        <input type="text" ref="myTextInput"/>
        <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
