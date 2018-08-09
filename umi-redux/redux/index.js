import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

// 比 Component 更小 耗内存更小
export default class ReduxWrapper extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div> { this.props.children } </div>
      </Provider>
    )
  }
}
