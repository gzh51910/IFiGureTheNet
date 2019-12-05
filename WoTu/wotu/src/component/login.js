
import React,{Component} from 'react';
import { Form, Icon, Input, Button,Tabs,Radio} from 'antd';
import '@babel/plugin-proposal-decorators'
import {Redirect,withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import UserAction, { LOGIN } from '../store/action/common'
import axios from 'axios'
import '../css/mycenter.css'

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
class LogIn extends Component{
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
        let { phone, password} = values    
      if (!err) {
          let result = await axios.get("http://localhost:8011/login", {
              params: { phone, password }

          })
          let { data, headers } = result
          if (data.status === 0) {
              alert("账号或者密码错误，请重新输入")
          } else {
              let { dispatch } = this.props;
              let user = data.data[0]
              let Authorization=headers.authorization;
              dispatch(login(user));
              localStorage.setItem('Authorization', Authorization)
              this.props.history.push('/mine')
          }
      } 
        
    });
    };
    
    Reg = (e) => {

        e.preventDefault();
        let phone=this.phone.state.value
        let password = this.password.state.value
        if (phone && password) {
            axios.post("http://localhost:8011/reg", { phone, password })
            alert('注册成功')
            this.props.history.push('/mycenter')      
        } else {
            alert("请输入账号或者密码")
            return;
        }
        
        
  }
  goBack=()=>{
    
    this.props.history.push('/home')
  }
  render() {
      const { getFieldDecorator } = this.props.form;
      return (
        
          <Tabs defaultActiveKey="1"
              style={{textAlign:'center',fontSize:'0.28rem'}}
          >
            <TabPane tab="登录" key="1">
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
            <TabPane tab="注册" key="2">
                  <Form
                      style={{ padding: '0 0.5rem' }}>
                      <Form.Item>
                        <Input
                          style={{height:'0.9rem'}}
                          prefix={<Icon type="user" />}
                          placeholder="请输入手机号码"
                          ref={input => this.phone = input}
                        />

                      </Form.Item>
                       <Form.Item>
                        <Input
                            style={{height:'0.9rem'}}
                            prefix={<Icon type="lock" />}
                            type="password"
                            placeholder="请输入密码"
                            ref={input => this.password = input}
                         />
                      </Form.Item>
                      <Form.Item>
                          < article className = "verification-wrap" >
                            <input placeholder='请输入验证码' className='verification'></input>
                            <button className='btnA'>免费获取验证码</button>
                        </article>
                      </Form.Item>
                      <article>
                          < Radio
                              style={{ marginLeft: '-1.5rem' }}>同意《须知声明》&nbsp;《版权声明》</Radio>
                      </article>

                    <Form.Item >
                          <Button type="" htmlType="submit"
                              onClick={this.Reg}
                                style={{
                                    width: '100%', height: '0.9rem',
                                    background: '#0cc59e', color: '#fff',
                                    fontSize: '0.3rem'
                                    
                                }}>
                        立即注册
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