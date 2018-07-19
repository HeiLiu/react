import React, { Component } from 'react';
// React Ui -> 阿里的antd 部分引用
import { Table, Pagination, Input, Row, Button, Modal, Form } from 'antd'
import 'antd/dist/antd.css'

import './App.css';

const { Search } = Input
const FormItem = Form.Item
const { confirm } = Modal

class UserGist extends Component {
  state = {
    username: '',
    lastGistUrl: ''
  }
  render() {
    return (
      <div>
        {this.state.username}'s last gist is <a href={this.state.lastGistUrl}> Here</a>
      </div>
    )
  }
  
  componentDidMount() {
    fetch (this.props.source)
      .then(data => data.json())
      .then(data => {
        const lastGist = data[0]
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        })
      })
  }
  
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <UserGist source="https://api.github.com/users/octocat/gists"/>
      </div>
    );
  }
}

// 如果当前页面中有使用Form组件 就这样子搞 先调用Form.create()
export default App;
