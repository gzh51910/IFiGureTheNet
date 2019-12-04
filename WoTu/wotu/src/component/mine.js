import React from 'react'
import '../css/mine.css'
import { Button, Icon } from 'antd';
import {
    connect
} from 'react-redux'
//  映射属性（获取）
const mapStateToProps = (state) => {
    // console.log(state);
    
    let {
        user
    } = state.common;
    let phone = user.phone;
    return {
        user,
        phone
    }
}

function Me({ menu, Right, goto, phone, user,history,logout }) {

  
        return (
            <section className='warp'>
                <article className='head'>
                    <article className='message'>
                        <article className='ID'>
                        <p>{phone}</p>
                        <p>{'ID:'+user._id}</p>
                        </article>
                        <article className='Pic'>
                            <img src={require('../img/TX.jpg')}/>
                        </article>
                    </article>
                </article>

                <article className='account'>
                    <span>账户余额：0我图币</span>
                    <Button type="primary"
                        size='small'
                        style={{background:'#0cc59e'}}
                    ><a onClick={goto}>充值</a></Button>
                </article>
                <article className='setting-wrap'>
                    {
                        menu.map(item => {
                            return <article key={item.name}
                                    className='setting'
                            >
                                <article className='icon-warp'>
                                    <Icon type={item.icon}
                                        className="icon"
                                        style={{color:'#0cc59e'}}
                                    />
                                    <span>{item.name}</span>
                                </article>
                                <Icon type={Right} style={{
                                    fontSize:' 0.3rem',
                                    width: '0.4rem'}}/>
                            </article>
                        })
                    }
                </article>

                <article className='logout'>
                    < Icon type="exclamation-circle"
                        style={{
                            color: '#0cc59e', marginRight: '0.2rem',
                                fontSize: '0.4rem',
                                width: '0.5rem'
                        }}
                    />
                    <span
                        onClick={logout}
                    >退出登录</span>
                </article>
            </section>
        )
    }
Me = connect(mapStateToProps)(Me)
export default Me;