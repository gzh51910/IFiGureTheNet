
import React, { Component } from 'react'
import '../css/list.css';
import { Input,Icon,Tabs,Divider} from 'antd';
const { Search } = Input;
const { TabPane } = Tabs;
class List extends Component{
    state = {
        title:'',
        menu: [
             {
                 name: '装饰画 / 玄关装饰'
             }, {
                 name: '背景墙/壁纸'
             }, {
                 name: '地面/吊顶设计'
             }, {
                 name: '平面/展板/海报'
             }, {
                 name: '文化墙/展馆/宣传栏'
             }, {
                 name: '视频/配乐/实拍'
             }, {
                 name: 'PPT模板/办公文档'
             }, {
                 name: '手抄报/档案/课件'
             }, {
                 name: '电商淘宝/新媒体/UI'
             }, {
                 name: '元素/矢量/样机/插画'
             }, {
                 name: '服装/家居/数码图案'
             }, {
                 name: '摄影图/创意合成'
             }, {
                 name: '摄影图/创意a'
             }, {
                 name: '摄影图/创意b成'
             },

        ]
    }
     callback=(key)=>{
        console.log(key);
    }
    goto = (name) =>{
        this.setState({
            title:name
        })
        
    }
    render() {
        return (
            <section >
                <article className = 'Search-warp' >
                    < Icon type="left"
                        style={{
                           position: 'absolute',
                            left: '0.4rem',
                            top:'.25rem',
                            color: '#fff',
                            fontSize: '0.5rem'
                        }}
                    />
                    <Search
                        style={{ width: '5rem',height:'0.7rem',borderRadius:'30%'}}
                        className='Search'
                        placeholder="请输入标题、关键词搜索"
                        onSearch={value => console.log(value)}
                        />
                </article>
                <article style={{position:"absolute",top:'1rem'}}>
                    <ul>
                        {
                            this.state.menu.map(item => {
                                return <li
                                    className='nav-left'
                                    key={item.name}
                                    onClick={this.goto.bind(this,item.name)}
                                >
                                    {item.name}
                                </li>
                            })
                        }
                    </ul>
                </article>
                <article className='Title'>
                    <h4>进入{this.state.title}频道</h4>
                </article>
                <article style={{width:'5rem',marginTop:'1.2rem',marginLeft:'30%'}}>
                    < Divider className ='divider'> <span style={{fontSize:'12px'}}>主要分类</span> </Divider>
                </article>
            </section>
        )
    }
}
export default List;