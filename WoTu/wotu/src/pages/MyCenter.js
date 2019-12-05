import React, { Component } from 'react'
// import MYC from '../component/mycenter'
// import { Icon} from 'antd'
import '../css/mycenter.css'
import Login from './Login'
class MyCenter extends Component {
    state = {
        dis:'none'
    }
    goto = () =>{
        let { history } =this.props
        history.push('./mine')
    }
    render() {
        return (
            <section>
                 <article className='head-wrap'>
                    <span>个人中心</span>
                </article>
                {/* <MYC></MYC>       */}
                <Login></Login>
            </section>
            
            
        )
            
    }
}

export default MyCenter;