import React, { Component } from 'react'
import _ from 'lodash'
import Editor from '../components/Editor'
import moment from 'moment'
import 'moment/locale/zh-cn'  // 设定时区
import { loadCollection, db } from '../database';
moment.locale('zh-CN')

class Note extends Component {
  state = {
    entity: this.props.entity,
    text: this.props.entity.text,
    open: false,
    updated: this.props.entity.meta.updated || this.props.entity.meta.created,
    destroyEntity: this.props.destroyEntity
  }
  updated() {
    return moment(this.state.updated).fromNow()
  }
  header() {
    return _.truncate(this.state.text, { length: 30 }) || '新建笔记'
  }
  toggle() {
    // this.setState({
    //   open: !tihs.state.open
    // })
    this.setState((prevState) => {
      return {
        open: !prevState.open
      }
    })
  }
  updateEntity = event => {
    const _body = event.target.value
    this.setState({
      text: _body
    })
    loadCollection("notes").then(collection => {
      const entity = this.state.entity
      entity.text = _body
      collection.update(entity)
      db.saveDatabase()
    })
    console.log(_body)
  }
  words() {
    return this.state.text.length
  }
  render() {
    return (
      <div className="item">
        <div className="meta">
          {this.updated()}
        </div>
        <div className="content">
          <div className="header" onClick={this.toggle.bind(this)}>
            {this.header()}
          </div>
          <div className="extra">
            {this.state.open && (
              <Editor
                entity={this.state.entity}
                updateEntity={this.updateEntity}
              />
            )}

            {this.words()} 字

            { this.state.open && <i className="right floated trash online icon" onClick={() => this.state.destroyEntity(this.state.entity)}></i>} 
          </div>
        </div>
      </div>
    )
  }
}

export default Note


