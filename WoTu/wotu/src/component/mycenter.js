import React from 'react'
import '../css/mycenter.css'
import {Tabs} from 'antd'
import Reg from '../pages/Reg';
const { TabPane } = Tabs;

class MYC extends React.Component{
    
     handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
        // let { phone, password} = values    
//       if (!err) {
//         let {data} = await axios.get("http://localhost:8011/login", {params:{ phone, password}
//          
//         })
//         //   console.log(data);
//         if(data.status==1){
//           let user=data.data[0];
//          let { dispatch } = this.props;
//           dispatch(login(user))
//           localStorage.setItem('user',JSON.stringify(user));
//           this.props.history.push('/mine')
//         } else {
//             alert("用户名或者密码错误！")
// }
//     }
    });
    };
    render() {
        // console.log(this);
        
    //   const { getFieldDecorator } = this.props.form;
    return (
        <section
            // style={{ display:dis }}
        >
                <article>
                    <Tabs
                        defaultActiveKey="1"
                        className='Tabs'
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
                                // onClick={goto('/')}
                            >
                                    < article className = 'Wotu'/>
                                    < span className = 'Span'> 我图网账号登录 </span>
                                </article>
                            </article>
                        </TabPane>

                        <TabPane tab="注册" key="2">
                            */}
                        </TabPane>
                    </Tabs>
                </article>
            </section>
        )
    }
}
    
export default MYC;