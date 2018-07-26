import React, { Component } from 'react'
import Player from '@/containers/Player'
import PlayerList from '@/containers/PlayerList'

class MusicPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSongIndex: 0,
      show: false
    }
  }
  
  render() {
    return (
      <div className="music-player">
        <Player currentIndex={this.state.currentSongIndex}/>
        <PlayerList currentIndex={this.state.currentSongIndex}/>
      </div>
    )
  }
}

export default MusicPlayer

// export default connect(mapStateToProps, mapDispatchToProps)(containerName)
