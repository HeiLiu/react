// 返回新状态的函数 pure function
import { combineReducers } from 'redux'
import * as ActionsTypes from './actionTypes'

const initialState = {
  song: {},
  songs: [],
  showStatus: false
}

function song(song = initialState.song,action) {
  switch (action.type) {
    case ActionsTypes.CHANGE_SONG:
      return action.song 
    default:
    return song
  }
}

function songs(songs = initialState.songs, action) {
  switch (action.type) {

    case ActionsTypes.SET_SONGS:
      return action.songs
    case ActionsTypes.REMOVE_SONG_FROM_LIST:
      return songs.filter(song => song.id !== action.id)
    default: 
      return songs
  }
}

function showStatus(showStatus = initialState.showStatus,action) {
  switch (action.type) {
    case ActionsTypes.SHOW_PLAYER:
      return action.showStatus
    default:
      return showStatus
  }
}



const reducer = combineReducers({
  song, 
  songs,
  showStatus
})
export default reducer

