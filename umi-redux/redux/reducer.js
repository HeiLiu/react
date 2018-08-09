import { UPDATE_VALUE } from './action'
// 提供state 
export function reducer(state, action) {
  state = { ...state } || { value : 1 }

  switch(action.type) {
    case UPDATE_VALUE:
      state.value = action.payload;
      break;
    default: 
      break
  }
  return state
}