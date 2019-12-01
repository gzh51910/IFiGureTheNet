import React from 'react'
import '../css/mycenter.css'
import { Icon, Tabs,Radio, Select, } from 'antd'
const { TabPane } = Tabs;
function MYC() {
      function callback(key){
           console.log(key);
       }

    function login(a) {
        console.log(a);
    }

    return (
        <section
            style={{ display: 'brock' }}
        >
                <article>
                    <Tabs
                        defaultActiveKey="1"
                        className='Tabs'
                        style={{marginBottom:'0'}}
                        // onChange={this.callback}
                    >
                        <TabPane tab="登录" key="1" 
                        style={{marginBottom:'0'}}
                            
                        >
                            <article className='Login'>
                                <article>
                                    <article className='Figure'/>
                                        <span className='Span'>QQ账号直接登录</span>
                                </article>
                            <article
                                onClick={login}
                            >
                                    < article className = 'Wotu'/>
                                    < span className = 'Span'> 我图网账号登录 </span>
                                </article>
                            </article>
                        </TabPane>

                        <TabPane tab="注册" key="2">
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
                                    <article style={{marginBottom: '0.3rem',marginLeft:'-2.4rem'}}>
                                        <Radio>同意《须知声明》&nbsp;《版权声明》</Radio>
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

export default MYC;