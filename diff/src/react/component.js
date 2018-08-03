import renderComponent from '../react-dom/render.js'
class Component {
  constructor(props = {}) {
    this.isReactComponent = true
    this.state = {}
    this.props = props
  }
  // 响应式原理
  setState(stateChange) {
    // 将新的对象里面的内容复制给state
    Object.assign(this.state, stateChange)
    // 进行 DOM 更新
    renderComponent(this)
  }
}
export default Component
