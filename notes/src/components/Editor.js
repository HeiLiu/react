import React, { Component } from 'react'

class Editor extends Component {
  state = {
    entity: this.props.entity,
    text: this.props.entity.text,
    updateEntity: this.props.updateEntity
  }
  render() {
    return (
      <div className="ui form">
        <div className="field">
          <textarea
           cols="30"
            rows="5"
            placeholder="要做点什么笔记呢^_^"
            defaultValue={this.state.text}
            onInput={event => this.state.updateEntity(event)}/>
        </div>
      </div>
    )
  }
}

export default Editor
