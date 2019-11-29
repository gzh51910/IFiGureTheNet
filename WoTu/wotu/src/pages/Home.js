
import React, { Component } from 'react'
import '../css/home.css';
import {Icon,Carousel,Card } from 'antd';
const { Meta } = Card;
class Home extends Component{
    state = {
        datalist:[
                    {
                        "title":1,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    },
                    {
                        "title":2,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    },
                    {
                        "title":3,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    },
                    {
                        "title":4,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    },
                    {
                        "title":5,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    },
                    {
                        "title":6,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    },
                    {
                        "title":7,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    },
                    {
                        "title":8,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    },
                    {
                        "title":9,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    },
                    {
                        "title":10,
                        "src" : "https://img.wotucdn.com/tubi_home/2019-11-28/1a56e08e80c50bc607e09d56d9c40b29.png"
                    }
        ],
        list:[
            {
                "num":"1",
                "src":"https://img.wotucdn.com/tubi_home/2019-09-12/c631c16d08de1e0ddafb43341bc795f6.png",
                "title":"装饰画",
                "href":"//m.ooopic.com/home-35--.html"
            },
            {
                "num":"2",
                "src":"https://img.wotucdn.com/tubi_home/2019-09-12/5a3be181510029e7ce8801983afb5e37.png",
                "title":"背景墙",
                "href":"//m.ooopic.com/home-70--.html"
            },
            {
                "num":"3",
                "src":"https://img.wotucdn.com/tubi_home/2019-09-12/e9ea3855a7a948bc0c0c4c7f03f9c93d.png",
                "title":"地面吊顶",
                "href":"//m.ooopic.com/home-12--.html"
            },
            {
                "num":"4",
                "src":"https://img.wotucdn.com/tubi_home/2019-09-12/e5209bd91d7e93d66582c427901be12c.png",
                "title":"平面展板",
                "href":"//m.ooopic.com/home-41--.html"
            },
            {
                "num":"5",
                "src":"https://img.wotucdn.com/tubi_home/2019-09-12/af7a2db17f161e2b4c3c32d9992c2102.png",
                "title":"手抄报",
                "href":"//m.ooopic.com/home-117--.html"
            },
            {
                "num":"6",
                "src":"https://img.wotucdn.com/tubi_home/2019-09-12/bbb3641a7644e3c17c183f7522461f5e.png",
                "title":"视频音效",
                "href":"//m.ooopic.com/phome-4-.html"
            },
            {
                "num":"7",
                "src":"https://img.wotucdn.com/tubi_home/2019-09-12/d7bbf7a0014de316c00bea61e9c7d729.png",
                "title":"办公创意",
                "href":"https://ppt.ooopic.com/"
            },
            {
                "num":"8",
                "src":"https://img.wotucdn.com/tubi_home/2019-09-12/bbb3641a7644e3c17c183f7522461f5e.png",
                "title":"VIP专区",
                "href":"https://m.ooopic.com/vip/"
            }
        ],
        list1:[
            {
                "num1":"1",
                "src":"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
            },
            {
                "num1":"2",
                "src":"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
            },
            {
                "num1":"3",
                "src":"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
            },
            {
                "num1":"4",
                "src":"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
            },
            {
                "num1":"5",
                "src":"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
            },
            {
                "num1":"6",
                "src":"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
            },
            {
                "num1":"7",
                "src":"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
            },
            {
                "num1":"8",
                "src":"http://b-ssl.duitang.com/uploads/item/201208/30/20120830173930_PBfJE.jpeg",
            },
        ],
        list2:[
            {
                "num2":"1",
                "sb":"11",
                "type1":"contacts",
                "title1":"装饰画/玄关装饰",
                "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title2":"装饰画",
                "src_R":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title3":"装饰画",
            },
            {
                "num2":"2",
                "sb":"12",
                "type1":"contacts",
                "title1":"装饰画/玄关装饰",
                "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title2":"装饰画",
                "src_R":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title3":"装饰画",
            },
            {
                "num2":"3",
                "sb":"13",
                "type1":"contacts",
                "title1":"装饰画/玄关装饰",
                "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title2":"装饰画",
                "src_R":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title3":"装饰画",
            },
        ]
    }
    gotoGoods=(id)=>{
        this.props.history.push(`/goods/${id}`)
        
    }
    gotoList=(id)=>{
         this.props.history.push({
            pathname:`/list`,
            params:id
        })
    }
    render() {
        return (
                <div className="home_box">
                    {/* 头部 */}
                    <div className="header clearfix">
                        <div className="logo fl"><a href=""></a></div>
                        <div className="fr search-top  clearfix">
                            <a onClick={this.gotoGoods.bind(this,5)}>
                                请输入标题、关键词搜索
                       <i className="fr"><Icon type="search" /></i>
                            </a>
                        </div>
                    </div>
                   {/* 轮播图 */}
                    <Carousel autoplay>
                    {
                        this.state.datalist.map(item => {
                            return <div key={item.title}>
                                {
                                   <img  src={item.src} />
                                }
                            </div>
                        })
                    }
                    </Carousel>
                   {/* 导航模块 */}
                    <div className="index-classify">
                        {
                        this.state.list.map(item => {
                            return <a onClick={this.gotoGoods.bind(this,4)} key={item.num} className="fl classify-box">
                           <div className="classify"><img src={item.src}></img></div>
                        <p>{item.title}</p>
                            </a>
                        })
                    }
                    </div>
                      {/* 精选专题 */}
                      <div className="title-box clearfix">
                        <i className="icon-subject fl"></i>
                        <span className="fl">精选专题</span>
                    </div>
                    {/* 左右滑动列表 */}
                    <div className="subject-box">
                        <ul className="subject-box-ul">
                            {
                                this.state.list1.map(item => {
                                    return <li className="subject-box-li" key={item.num1}>
                                    <img src={item.src} onClick={this.gotoGoods.bind(this,3)} />
                                 </li>
                                })
                           }
                        </ul>
                    </div>
                    {/* 首页分类 */}
                    <div className="lei">
                      {
                          this.state.list2.map(item=>{
                              return   <div className="special-subject" key={item.num2}>
                                        <div className="title-box clearfix">
                                        <span className="fl"><Icon type={item.type1} theme="twoTone" twoToneColor="#238e68"/>~~{item.title1}</span>
                                        </div>
                                        {/* 图片加文字 */}
                                        <div className="cart_c">
                                        <Card
                                            style={{ width: 175,height:238,float:"left",marginLeft:8 }}
                                            cover={<img alt="example" src={item.src_L} onClick={this.gotoGoods.bind(this,1)}/>}>
                                            <Meta title={item.title2} style={{textAlign:"center"}} onClick={this.gotoGoods.bind(this,1)}/>
                                        </Card>
                                        <Card
                                            style={{ width: 175,height:238,float:"left",marginLeft:8 }}
                                            cover={<img alt="example" src={item.src_R}onClick={this.gotoGoods.bind(this,2)}/>}>
                                            <Meta title={item.title3} style={{textAlign:"center"}} onClick={this.gotoGoods.bind(this,2)}/>
                                        </Card>
                                        </div>
                                        {/* 更多 */}
                                        <div className="more-work">
                                            <a onClick={this.gotoList.bind(this,item.sb)}>更多分类
                                            <Icon type="right-circle" theme="twoTone"  twoToneColor="#007fff"/>
                                            </a>
                                        </div>
                                    </div>
                          })
                      }
                    </div>
                </div>
        )
    }
}
export default Home;