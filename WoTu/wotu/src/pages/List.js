
import React, { Component } from 'react'
import '../css/list.css';
import { Input,Icon,Tabs,Divider,Carousel,Card} from 'antd';
const { Meta } = Card;
const { Search } = Input;
const { TabPane } = Tabs;
class List extends Component{
    state = {
        title:[ {
            num1:"1",
            name: '装饰画 / 玄关装饰',
            "title3":[  {
                "num2":"1",
                "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title2":"装饰画",
            },],
        },],
        menu: [
             {
                num1:"1",
                 name: '装饰画 / 玄关装饰',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"2",
                 name: '背景墙/壁纸',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                }, {
                    "num2":"2",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"3",
                 name: '地面/吊顶设计',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                }, {
                    "num2":"2",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                }, {
                    "num2":"3",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"4",
                 name: '平面/展板/海报',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"5",
                 name: '文化墙/展馆/宣传栏',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"6",
                 name: '视频/配乐/实拍',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                }, {
                    "num2":"2",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"7",
                 name: 'PPT模板/办公文档',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"8",
                 name: '手抄报/档案/课件',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                }, {
                    "num2":"2",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"9",
                 name: '电商淘宝/新媒体/UI',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"10",
                 name: '元素/矢量/样机/插画',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"11",
                 name: '服装/家居/数码图案',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"12",
                 name: '摄影图/创意合成',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"13",
                 name: '摄影图/创意a',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             }, {
                num1:"14",
                 name: '摄影图/创意b成',
                 "title3":[  {
                    "num2":"1",
                    "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                    "title2":"装饰画",
                },],
             },

        ],
    }
     callback=(key)=>{
        console.log(key);
    }
    goto = (item) =>{
        this.setState({
            title:[item]
        })
        
    }
    gotoDetail=(src)=>{
        // console.log(this.props);
        // this.props.history.push("/detail");
        this.props.history.push({
            pathname:`/detail`,
            params:src
        })
    }
    gotoHome=()=>{
        this.props.history.push("/home");
    }
    render() {
        return (
            <section style={{marginBottom:"15.2rem",width:"100%",height:"100%"}}>
                <article className = 'Search-warp' >
                    < Icon type="left"
                        style={{
                           position: 'absolute',
                            left: '0.4rem',
                            top:'.25rem',
                            color: '#fff',
                            fontSize: '0.5rem'
                        }}
                        onClick={this.gotoHome}
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
                                    onClick={this.goto.bind(this,item)}
                                >
                                    {item.name}
                                </li>
                            })
                        }
                    </ul>
                </article>
                <article className='Title'>
                    <h4>进入{this.state.title[0].name}频道</h4>
                </article>
                <article style={{width:'5rem',marginTop:'1.2rem',marginLeft:'30%'}}>
                    < Divider className ='divider'> <span style={{fontSize:'12px'}}>主要分类</span> </Divider>
                </article>
                <article className="listList">
                    {
                        this.state.title.map(item=>{
                            return    <div className="cart_c1" key={item.num1}>
                                    {
                                        item.title3.map(item1=>{
                                            return  <Card
                                            key={item1.num2}
                                            style={{ width: "25%",height:"2rem",float:"left",marginLeft:"6%",marginBottom:"0.3rem"}}
                                            cover={<img onClick={this.gotoDetail.bind(this,item1.src_L)} alt="example" src={item1.src_L} style={{ height: "1.5rem"}}/>}>
                                            <Meta title={item1.title2} style={{textAlign:"center",height:"0.5rem"}}/>
                                        </Card>
                                        })
                                    }
                                    </div>
                        })
                        }
                </article>
            </section>
        )
    }
}
export default List;