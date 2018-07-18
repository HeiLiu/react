import React, { Component } from 'react';
import Note from './Note'

class Notes extends Component {
  // state => vue data
  state = {
    entities: [
      'PHP是世界上最好的语言',
      'Nodejs了解一些',
      'React: Vue 算个JB'
    ]
  }
  createEntry() {
    console.log(this.state.entities)
  }
  destroyEntity (entity) {
    console.log(entity)
  }
  render() {
    // react 独有的JSX 模板引擎 在js里面直接写 html
    // class 是关键字 html -> node 在jsx中html会编译成js , 使用className
    const entities = this.state.entities
    const noteItems = entities.map((entity, index) => {
      return <Note
        key={index}
        entity={entity}
        destroyEntity={this.destroyEntity}
      />

    })
    console.log(noteItems)
    return (
      <div className="ui container notes">
        <h4 className="ui horizontal divider header">
          <i className="paw icon"></i>
          Notes App _React.js
        </h4>
        <button className="ui right floated basic violet button" onClick={this.createEntry.bind(this)}>
          添加笔记
        </button>
        <div className="ui divided items">
          <span> {this.state.entities ? this.state.entities : '还没有笔记，请先添加'}</span>
          {!this.state.entities.length && <span className="ui small disabled header"> 还没有笔记，请先添加</span>}
          {noteItems}
        </div>
      </div>
    )
  }
}

export default Notes