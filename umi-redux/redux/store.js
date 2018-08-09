import { createStore, applyMiddleware, combineReducers } from 'redux'
// createStore 提供状态树  类似vuex 中的每个module
import thunk from 'redux-thunk'
// 支持异步数据流 
// 之前 action -> reducer 改变只支持同步操作 数据机制是纯函数的 有一个数据就有一个输出
import { reducer } from './reducer'

const reducers = {
  global: reducer
}
// 在每一次redux 操作之前由thunk进行接管
export const store = createStore(combineReducers(reducers), applyMiddleware(...[thunk]))  // 支持异步处理

export function registerReducer(key, reducer) {
  // store.replaceReducer()
  reducers[key] = reducer
  store.replaceReducer(combineReducers(reducers))
}

