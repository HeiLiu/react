import React, { Component } from 'react'
import './header.styl'

class MusicPlayer extends Component {
  handleClick() {
    // 原生的足以
    window.history.back()
  }
  render() {
    return (
      <div className="music-header">
        <span className="header-back" onClick={this.handleClick}>
        {/* 图标字体 */}
          <i className="icon-back"></i>
        </span>
        <div className="header-title">
          {this.props.title}
        </div>
      </div>
    )
  }
}

export default MusicPlayer
