import React, { Component } from 'react';
import { db, loadCollection } from '../database'
import Note from './Note'


class Notes extends Component {
  constructor (props) {
    // 先执行一下父类的构造函数 -> Component
    super(props)
    this.getInitialData ()
  } 
  getInitialData () {
    loadCollection ('notes')
      .then(collection => {
        // console.log(collection)
        // collection.insert ([
        //   {
        //     text: 'PHP是世界上最好的语言'
        //   },
        //   {
        //     text: 'Nodejs了解一下'
        //   },
        //   {
        //     text: 'React: Vue 算个JB'
        //   }
        // ])
        // db.saveDatabase()
        const entities = collection.chain()
          .find()
          .simplesort('$loki', 'isdesc')
          .data()
          console.log(entities)
          this.setState({
            entities
          })
      })
  }

  // state => vue data
  state = {
    entities: []
  }
  createEntry() {
    // console.log(this.state.entities)
    loadCollection('notes')
      .then((collection)=>{
        const entity = collection.insert({
          text: ''
        })
        db.saveDatabase()
        this.setState((preState) => { this.state
          const _entities = preState.entities
          _entities.unshift(entity);
          return {
            entities: _entities
          }
        })
      })
  }
  destroyEntity (entity) {
    console.log(entity)
    const _entities = this.state.entities.filter((_entity) => {
      return _entity.$loki !== entity.$loki // 把不要删除的过滤出来
    })
    this.setState({
      entities: _entities
    })
    console.log(_entities)
    console.log(this.state.entities)

    loadCollection('notes')
      .then((collection)=> {
        collection.remove(entity)
        db.saveDatabase()
      })
  }
  render() {
    // react 独有的JSX 模板引擎 在js里面直接写 html
    // class 是关键字 html -> node 在jsx中html会编译成js , 使用className
    const entities = this.state.entities
    const noteItems = entities.map((entity) => {
      return <Note
        key={entity.$loki}
        entity={entity}
        destroyEntity={this.destroyEntity.bind(this)}
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
          {/* <span> {this.state.entities ? this.state.entities : '还没有笔记，请先添加'}</span> */}
          {!this.state.entities.length && <span className="ui small disabled header"> 还没有笔记，请先添加</span>}
          {noteItems}
        </div>
      </div>
    )
  }
}

export default Notes 
