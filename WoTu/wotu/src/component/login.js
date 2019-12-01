import React from 'react'
import { Tabs,Radio} from 'antd';
const { TabPane } = Tabs;

function LogIn() {
    function login() {
        console.log(666);
        // input.value
        
    }
    return (
        <Tabs defaultActiveKey="1"
            style={{textAlign:'center'}}
            // onChange={callback}
        >
            <TabPane tab="账号登录" key="1">
                 <article className='Reg'>
                    <form>
                        <input placeholder="请输入账号"
                            
                            ref={input =>input = input}
                            style={{
                                width: '100%', height: '0.9rem',
                                borderRadius: '0.15rem', paddingLeft: "0.1rem",
                                margin:'0.5rem 0 0.3rem'
                            }}
                    />
                        <input
                            placeholder='密码'
                        style={{
                                width: '100%', height: '0.9rem',
                                borderRadius: '0.15rem', paddingLeft: "0.1rem", marginBottom: '0.3rem'
                            }}
                        />
                        < article className="verification-wrap" >
                            <input placeholder='请输入验证码' className='verification'></input>
                            <button className='btnA'>免费获取验证码</button>
                        </article>
                        <article style={{marginBottom: '0.3rem',marginLeft:'-4.5rem'}}>
                            <Radio>记住登录状态</Radio>
                        </article>
                        <button
                            className='btnB'
                            // onClick={login.bind(this)}
                        >立即登录</button>
                    </form>
                </article>
            </TabPane>
            <TabPane tab="手机快速登录" key="2">
             <article className='Reg'>
                    <form>
                        <input placeholder="请输入手机号码"
                            ref={input =>input = input}
                            style={{
                                width: '100%', height: '0.9rem',
                                borderRadius: '0.15rem', paddingLeft: "0.1rem",
                                margin:'0.5rem 0 0.3rem'
                            }}
                    />
                        {/* <input
                            placeholder='密码'
                        style={{
                                width: '100%', height: '0.9rem',
                                borderRadius: '0.15rem', paddingLeft: "0.1rem", marginBottom: '0.3rem'
                            }}
                        /> */}
                        < article className = "verification-wrap" >
                            <input placeholder='请输入验证码' className='verification'></input>
                            <button className='btnA'>免费获取验证码</button>
                        </article>
                        <article style={{marginBottom: '0.3rem',marginLeft:'-4.5rem'}}>
                            <Radio>记住登录状态</Radio>
                        </article>
                        <button className='btnB'>立即登录</button>
                    </form>
                </article>
            </TabPane>
        </Tabs>
    )
}
export default LogIn;