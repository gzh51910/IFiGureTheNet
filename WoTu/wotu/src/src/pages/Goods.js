import React, { Component } from 'react';
import '../css/goods.css';
import {Icon} from 'antd';
class Login extends Component {
    render() {
        return (
        <div className="bigBig">
            {/* 头部 */}
            <div className="classify-top">
                <div className="back">< Icon type="left"
                        style={{
                           position: 'absolute',
                            top:'0',
                            left:"0",
                            color: '#fff',
                            fontSize: '0.5rem'
                        }}
                    /></div>
                {/* <div class="nav-change">
                    <span>背景墙</span>
                    <i class="iconfont icon-xiala"></i>
                </div>
                <div class="searchLink"><a href="//m.ooopic.com/so/show/">搜索<i class="iconfont  icon-sousuo"></i></a></div> */}
            </div>
            </div>
        )
    }
}
export default Login;