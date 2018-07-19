import React, { Component } from 'react';
import './App.css';
//对react ui阿里的antd 部分引用
import { Table, Pagination, Input, Row, Button, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;

class App extends Component {
   columns = [{
    title: 'ID',
    dataIndex: 'key',
    key: 'key',
  },{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },{
    title: '操作',
    dataIndex: 'action',
    width: 200,
    render: (text, row) => {
      return (
        <div>
          <Button type="default" onClick={() => this.modal('edit', row)}>编辑</Button>
          <Button type="danger" style={{marginLeft: 10 }} onClick={() => this.removeRow(row)}>删除</Button>
        </div>
      )
    }
  }]
  state = {
    visible: false,
    action: '',
    users: [{
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }]
  }
  removeRow (row) {
    const that = this
    confirm({
      title: '是否要删除该用户?',
      okText: '是',
      cancelText: '否',
      onOk () {
        const _users = that.state.users.filter((user) => {
          return user.key !== row.key
        })
        that.setState({
          users: _users
        })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }

    return (
      <div className="App">
        <Row>
          <Search style={{ width: 300 }} />
          <Button type="primary" style={{ marginLeft: 20 }}
            onClick={() => this.modal('add')}>添加用户
          </Button>
        </Row>
        <Row style={{paddingTop: 20}}>
          <Table dataSource={this.state.users} columns={this.columns} rowKey={ row => row.key} bordered pagination={false}/>
        </Row>
        <Modal title="添加用户" visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.setState({ visible: false })}>
          <Form>
            <FormItem label="用户" {...formItemLayout}>
              {
                getFieldDecorator('name', {
                  rules: [{required: true, message: 'Please input your username'}]
                })(<Input placeholder="UserName"></Input>)
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator ('age',{
                    rules: [{required: true, message: 'Please input your age!'} ]
                  }) (<Input placeholder="Age"></Input>)
              }
            </FormItem>
            <FormItem label="地址" {...formItemLayout}>
              {
                getFieldDecorator ('address',{
                    rules: [{required: true, message: 'Please input your Address!'} ]
                  }) (<Input placeholder="Address"></Input>)
              }
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
  handleOk() {
    console.log(this.state.action)
    const {0:type, 1:key} = this.state.action.split('|')
    if(type === 'add'){
      console.log(type)
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          let key = Number(this.state.users[this.state.users.length-1].key)
          key += 1 
          const user = {key, ...values}
          this.state.users.push(user)
          this.setState({
            visible: false,
            action:''
          })
        }
      })
    }else {
      console.log(type)
      this.props.form.validateFieldsAndScroll((err, values) => {
        if(!err){
          const _user = {'key':key, ...values}
          // console.log(_user)
          const users = this.state.users
          users.forEach((user, index) => {
            if(user.key === _user.key){
              users[index] = _user
            }
          })
          // console.log(users)
          this.setState({
            visible: false,
            action: '',
            users
          })
        }
      })
    }
      
  }
  modal(type, row) {
    const key = row? row.key : '999'
    this.setState({
      action: `${type}|${key}`,
      visible: true
    }, () => {
      this.props.form.resetFields()
      if(type === 'add') return
      this.props.form.setFieldsValue({
        name: row.name,
        age: row.age,
        address: row.address
      })
    });

  }
}
// 如果当前页面中有使用Form组件 就这样子搞 先调用Form.create()
export default Form.create()(App);
