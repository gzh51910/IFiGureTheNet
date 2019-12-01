import React, { Component } from 'react'
import MYC from '../component/mycenter'
import { Icon} from 'antd'
import '../css/mycenter.css'
import Login from './Login'
class MyCenter extends Component {
    
    
    
    render() {
        console.log(this.props);
        // let phone=/^1[3-9]{9}/
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
                {/* <MYC></MYC>       */}
                <Login></Login>
            </section>
            
            
        )
            
    }
}

export default MyCenter;