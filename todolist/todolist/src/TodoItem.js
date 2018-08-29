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
