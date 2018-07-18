import React, {Component} from 'react'

class Note extends Component {
  state = {
    entity: this.props.entity,
    destroyEntity: this.props.destroyEntity
  }
  
  render () {
    return (
      <div className="item">
        {this.state.entity}
        <i className="right floated trash online icon" onClick={() => this.state.destroyEntity(this.state.entity) }></i>
      </div>
    )
  }
}

export default Note