import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    const { deleteItem, index } = this.props
    deleteItem(index)
  }
  
  
  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    }
    return false
  }
  // 进行数据请求 放在componentDidMount中最安全最合适
  componentDidMount() {

  }

  render() {
    const { content,index } =  this.props 
    return (
      <div
       onClick={this.handleClick}
       data-index={index}
       >
        {content}
      </div>
    )
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number.isRequired
}

TodoItem.defaultProps = {
  // 可以给属性添加默认值
}

export default TodoItem
