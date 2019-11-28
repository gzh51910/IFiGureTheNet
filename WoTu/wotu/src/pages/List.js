
import React, { Component } from 'react'
import '../css/list.css';
import { Input,Icon } from 'antd';
const { Search } = Input;

class List extends Component{
    state = {
        menu: [
            {
                name: '装饰画 / 玄关装饰'
            },
            {
                name: '背景墙/壁纸'
            },
            {
                name: '地面/吊顶设计'
            },
            {
                name: '平面/展板/海报'
            },
            {
                name: '文化墙/展馆/宣传栏'
            },
            {
                name: '视频/配乐/实拍'
            },
            {
                name: 'PPT模板/办公文档'
            },
            {
                name: '手抄报/档案/课件'
            },
            {
                name: '电商淘宝/新媒体/UI'
            },
            {
                name: '元素/矢量/样机/插画'
            },
            {
                name: '服装/家居/数码图案'
            },
            {
                name: '摄影图/创意合成'
            },
        ]
    }
    render() {
        return (
            <div>
                < div className='Search-warp' >
                    < Icon type="left"
                        style={{
                            fontSize: '.5rem', margin: '0 0.13rem 0 -0.4rem',
                            color:'#fff'
                        }}
                    />
                    <Search
                        style={{ width: '80%',borderRadius:'30%'}}
                        className='Search'
                        placeholder="请输入标题、关键词搜索"
                        onSearch={value => console.log(value)}
                        />
                </div>
            </div>
        )
    }
}
export default List;