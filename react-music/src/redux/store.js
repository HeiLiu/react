// store 单一状态树 
import reducer from './reducers'
import { createStore } from 'redux'

const store = createStore(reducer)

export default store