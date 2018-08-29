import React, { Component, Fragment } from 'react'
// 使用fragment在渲染的时候最外层就不会多加一层 div
import TodoItem from './TodoItem'
import './style.css'


class TodoList extends Component {
  constructor(props) {
    super(props);
    // 组件的状态
    this.state = {
      inputValue: '',
      list: []
    }
  }
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  // 点击提交按钮添加到list
  handleClick() {
    const _value = this.state.inputValue
    if (_value.length === 0) {
      alert('还请您不要提交空的内容呢^_^')
      return
    } else {
      const _list = this.state.list
      this.setState({
        // 将最近插入的放在前面
        list: [_value, ..._list],
        inputValue: ''
      })
    }

  }
  // 通过事件委托 实现点击删除当前元素
  handleUlClick = (e) => {
    let target = e.target
    let index = target.getAttribute('data-index')
    console.log(target.nodeName.toLowerCase())
    const _list = this.state.list
    _list.splice(index, 1)
    this.setState({
      list: _list
    })
  }

  handleItemDelete(index) {
    const _list = this.state.list
    _list.splice(index, 1)
    this.setState({
      list: _list
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容^_^ </label>
          <input
            id="insertArea"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>提交</button>
        </div>
        {
          this.state.list.length ? <span>总共 {this.state.list.length} 条</span> : <span>暂时没有内容</span>
        }
        {/* <ul onClick={this.handleUlClick}> */}
          {
            this.state.list.map((item, index) => {
              return <div> <TodoItem 
                                key={index}
                                content={item}
                                index={index}
                                deleteItem = {this.handleItemDelete.bind(this)}
                            /> 
                     </div>
            })
          }
        {/* </ul> */}

      </Fragment>
    );
  }
}

export default TodoList
