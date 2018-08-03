import React from './react'
import ReactDOM from './react-dom'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 1
    }
  }
  onClick() {
    // console.log('123')
    this.setState({
      num: this.state.num + 1
    })
  }

  render () {
    return (
      <div>
        <h1>Count: { this.state.num } </h1>
        <button onClick = {() => this.onClick()}>ADD</button>
      </div>
    )
  }
}

ReactDOM.render(
  <div>
     Hello
    <span className='rt' onClick="console.log('zz')" style={{fontSize:20, fontWeight: 'bold'}}>World</span>
    <Counter/>
 </div>,
 document.getElementById('root')
)