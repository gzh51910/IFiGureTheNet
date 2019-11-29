import React, { Component } from 'react'
import '../css/mine.css'
import { Button, Icon } from 'antd';
import Me from '../component/mine'
class Mine extends Component {
    state = {
        Right:"right",
        menu: [
            {
                name: '我的收藏',
                icon:"star" 
            },
            {
                name: '我的订单',
                icon:"solution"
            }, {
                name: '我的优惠券',
                icon:"money-collect"
            }, {
                name: '邮箱设置',
                icon:"mail"
            }
        ]
    }
    render() {
        let { Right, menu } = this.state
        return <Me menu={menu} Right={Right} {...this.props}></Me>
    }
}
export default Mine;