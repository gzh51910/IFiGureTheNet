import React, { Component } from 'react'
import '../css/mycenter.css'
import { Icon, Tabs,Radio, Select, } from 'antd'
const { TabPane } = Tabs;
class MyCenter extends Component {
    
     callback=(key)=>{
        console.log(key);
    }
    aa(asd) {
        const inpVal = this.input.value;
        console.log(inpVal);
    }
    render() {
        let phone=/^1[3-9]{9}/
        return (
            <section>
                <article className='head-wrap'>
                    < Icon type="left"
                        style={{
                            position: 'absolute',
                            left: '.3rem',
                            color: '#fff',
                            fontSize:'0.5rem'
                        }}
                    />
                    <span>个人中心</span>
                </article>
                <article>
                    <Tabs
                        defaultActiveKey="1"
                        className='Tabs'
                        onChange={this.callback}>
                        <TabPane tab="登录" key="1">
                            <article className='Login'>
{/* style={{}} */}
                                <article className='fff'>
                                    <article className='Figure'/>
                                    <span className='Span'>QQ账号直接登录</span>
                                </article>
                                <article>
                                    < article className = 'Wotu'/>
                                    < span className = 'Span'> 我图网账号登录 </span>
                                </article>
                            </article>
                        </TabPane>

                        <TabPane tab="注册" key="2">
                            <article className='Reg'>
                                <form>
                                    <input placeholder="请输入手机号码"
                                        ref={input => this.input = input}
                                       style={{
                                            width: '100%', height: '0.9rem',
                                            borderRadius: '0.15rem', paddingLeft: "0.1rem",
                                            margin:'0.5rem 0 0.3rem'
                                        }}
                                    />
                                    <button onClick={this.aa.bind(this)}></button>
                                    <input
                                    style={{
                                            width: '100%', height: '0.9rem',
                                            borderRadius: '0.15rem', paddingLeft: "0.1rem", marginBottom: '0.3rem'
                                        }}
                                    />
                                    < article className = "verification-wrap" >
                                        <input placeholder='请输入验证码' className='verification'></input>
                                        <button className='btnA'>免费获取验证码</button>
                                    </article>
                                    <article style={{marginBottom: '0.3rem'}}>
                                        <Radio
                                        // style={{position:"absolute",left:'0.2rem'}}
                                    >同意《须知声明》&nbsp;《版权声明</Radio>
                                    </article>
                                    <button className='btnB'>立即注册</button>
                                </form>
                            </article>
                          
                        </TabPane>
                    </Tabs>,
                </article>
            </section>
        )
    }
}

export default MyCenter;