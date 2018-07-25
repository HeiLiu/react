import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import BScroll from 'better-scroll'
import './scroll.styl'

class Scroll extends Component {
  componentDidUpdate(prevProps, prevState) {
    // 组件更新后
    if (this.bScroll && this.props.refresh === true) {
      this.bScroll.refresh()
    }
  }
  
  componentWillUnmount() {
    // 卸载之前将 bscroll 删除
    this.bScroll.off('scroll')
    this.bScroll = null
  }
  
  componentDidMount() {
    // new 的时候需要 查找到节点
    this.ScrollView = ReactDOM.findDOMNode(this.refs.scrollView)
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.ScrollView, {
        probeType: 3,
        click: this.props.click // 回调
      })
      if (this.props.onScroll) {
        this.bScroll.on('scroll', (scroll) => {
          this.props.onScroll(scroll)
        })
      }
    }
  }
  refresh() {
    if (this.bScroll) {
      this.bScroll.refresh()
    }
  }

  render() {
    return (
      <div className="scroll-view" ref="scrollView">
        { this.props.children }
      </div>
    )
  }
}

Scroll.defaultProps = {
  click: true,
  refresh: false,
  onScroll: null
}

// 组件中的属性的类型声明
Scroll.propTypes ={
  click: PropTypes.bool,
  refresh: PropTypes.bool,
  onScroll: PropTypes.func
}
export default Scroll
