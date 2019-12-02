
import React,{Component} from 'react';
import { Form, Icon, Input, Button,Tabs } from 'antd';
import '@babel/plugin-proposal-decorators'
import {Redirect,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import UserAction from '../store/action/common'
import axios from 'axios'
const { TabPane } = Tabs;

const {login} =UserAction;
//  映射属性（获取）
const mapStateToProps = (state)=>{
  let {user} = state.common;
  let phone=user.phone;
  return {
      user,
      phone
  }
}
//  映射方法（修改操作）
// const mapDispatchToProps = (dispatch)=>{
//   return {
//     dispatch
//   }
// }
// connect((mapStateToProps,mapDispatchToProps))
class LogIn extends Component{
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
        let { phone, password} = values    
      if (!err) {
        let {data} = await axios.get("http://localhost:8011/login", {params:{ phone, password}
         
        })
        //   console.log(data);
        if(data.status==1){
          let user=data.data[0];
         let { dispatch } = this.props;
          dispatch(login(user))
          localStorage.setItem('user',JSON.stringify(user));
          this.props.history.push('/mine')
        } else {
            alert("用户名或者密码错误！")
}
    }
    });
  };
  constructor(props){
    super(props);
    this.goBack=this.goBack.bind(this);
}
  goBack(){
    this.props.history.push('/home')
  }
//   handleLogin(){ 

//     this.props.login(this.props.state)
// }
  render() {

    const { getFieldDecorator } = this.props.form;
      return (
        
          <Tabs defaultActiveKey="1"
              style={{textAlign:'center'}}
            //   onChange={callback}
          >
            <TabPane tab="账号登录" key="1">
                  <Form onSubmit={this.handleSubmit} style={{ padding: '0 0.5rem' }}>
                      <Form.Item>
                        {
                        getFieldDecorator('phone', {
                        rules: [{ required: true,message: '请输入手机号码！'},
                            { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误！'}],
                        })(
                        <Input
                          style={{height:'0.9rem'}}
                          prefix={<Icon type="user" />}
                          placeholder="请输入手机号码"
                        />
                      )}
                      </Form.Item>
                      <Form.Item>
                           { getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码！' }],
                            })(
                        <Input
                            style={{height:'0.9rem',marginLeft:'-0.24rem'}}
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="请输入密码"
                         />
                          )}
                      </Form.Item>
                   
            {/*        <Form.Item>
                           { getFieldDecorator('verification', {
                                rules: [{ required: true, message: '请输入验证码！' }],
                            })(
                        <Input
                            style={{height:'0.9rem',marginLeft:'-3.5rem',width:'50%'}}
                            placeholder="请输入验证码"
                        />
                          )}
                      </Form.Item> */}

                    <Form.Item >
                            <Button type="" htmlType="submit" ref='sub'
                                style={{
                                    width: '100%', height: '0.9rem',
                                    background: '#0cc59e', color: '#fff',
                                    fontSize:'0.3rem'
                                }}>
                        立即登录
                      </Button>
                    </Form.Item>
                  </Form>
               
            </TabPane>
            <TabPane tab="手机快速登录" key="2">
               <Form onSubmit={this.handleSubmit} style={{ padding: '0 0.5rem' }}>
                      <Form.Item>
                        {
                        getFieldDecorator('phone', {
                        rules: [{ required: true,message: '请输入手机号码！'},
                            { pattern: /^1[3-9]\d{9}$/, message: '手机号格式错误！'}],
                        })(
                        <Input
                          style={{height:'0.9rem'}}
                          prefix={<Icon type="user" />}
                          placeholder="请输入手机号码"
                        />
                      )}
                      </Form.Item>
                      <Form.Item>
                           { getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码！' }],
                            })(
                        <Input
                            style={{height:'0.9rem',marginLeft:'-0.24rem'}}
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="请输入密码"
                         />
                          )}
                      </Form.Item>
                   

                    <Form.Item >
                            <Button type="" htmlType="submit" ref='sub'
                                style={{
                                    width: '100%', height: '0.9rem',
                                    background: '#0cc59e', color: '#fff',
                                    fontSize:'0.3rem'
                                }}>
                        立即登录
                      </Button>
                    </Form.Item>
                  </Form>
            </TabPane>
        </Tabs>
          
      )}
        
         
}(Form.create()(LogIn))

LogIn = connect(mapStateToProps)(LogIn)
LogIn = withRouter(LogIn)
export default Form.create()(LogIn);