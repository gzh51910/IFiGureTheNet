import React, { Component } from 'react'
// import '../css/mine.css'
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
        ],
        ip:[
            {
                zhanghao:19128662457,
                ID:"ID:12345678",
                wotomoney:"0我图币"
            }
        ]
    }
    goto=(ip)=>{
        this.props.history.push({
            pathname:`/money`,
            params:ip
        })
    }

    
    render() {
            // console.log(this);
        let { Right, menu,ip } = this.state
        return <Me
            menu={menu} Right={Right}
            goto={this.goto.bind(this, ip[0])}
            ip={ip}
            {...this.props}
        ></Me>
    }
}
export default Mine;