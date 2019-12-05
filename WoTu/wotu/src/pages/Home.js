
import React, { Component } from 'react'
import '../css/home.css';
import {Icon,Carousel,Card } from 'antd';
import axios from 'axios';
const { Meta } = Card;
class Home extends Component{
    state = {
        datalist:[],
        list:[],
        list2:[],
        list3:[]
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
    async componentDidMount(){
        let {data:{data}} = await axios.get("http://localhost:8011/goods/find");
        let data2 = await axios.get("http://localhost:8011/goods/find2");
        let data3 = await axios.get("http://localhost:8011/goods/find3");
        let data4 = await axios.get("http://localhost:8011/goods/find4");
        let arr = [];
        let arr1 = [];
        let arr2 = [];
        data.forEach(item=>{
        arr.push(item.img)
        })
        for(var i=0;i<arr.length;i++){
            arr[i]=require('../img'+arr[i])
        }
        data2.data.data.forEach(item=>{
            arr1.push(item.imgUrl)
            })
        for(var i=0;i<arr1.length;i++){
            arr1[i]=require('../img/lunbo/'+arr1[i])
        }
        data4.data.data.forEach(item=>{
            arr2.push(item)
            })
        for(var i=0;i<arr2.length;i++){
            let a=arr2[i].imgUrl
            arr2[i].imgUrl = require('../img/homeImg/'+ a)
        }
        this.setState({
            list3:arr,
            datalist:arr1,
            list2:data3.data.data,
            list:arr2,
        })
        };
        
    render() {    
        return (
                <div className="home_box">
                    {/* 头部 */}
                    <div className="header clearfix">
                        <div className="logo fl"><a href=""></a></div>
                        <div className="fr search-top  clearfix">
                        <a onClick={this.gotoGoods.bind(this, 5)} href='#'>
                                请输入标题、关键词搜索
                       <i className="fr"><Icon type="search" /></i>
                            </a>
                        </div>
                    </div>
                   {/* 轮播图 */}
                    <Carousel autoplay>
                    {
                        this.state.datalist.map(item => {
                            return <div key={item}>
                                {
                                   <img  src={item} alt=''/>
                                }
                            </div>
                        })
                    }
                    </Carousel>
                   {/* 导航模块 */}
                    <div className="index-classify">
                        {
                        this.state.list.map(item => {
                            return <a onClick={this.gotoGoods.bind(this, 4)} key={item._id} className="fl classify-box" href='#'>
                           <div className="classify"><img src={item.imgUrl}></img></div>
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
                                this.state.list3.map(item => {
                                    return <li className="subject-box-li" key={item} >
                                    <img src={item} onClick={this.gotoGoods.bind(this,3)} alt='' />
                                 </li>
                                })
                           }
                        </ul>
                    </div>
                    {/* 首页分类 */}
                    <div className="lei" style={{marginBottom:"1rem"}}>
                      {
                          this.state.list2.map(item=>{
                              return   <div className="special-subject" key={item._id}>
                                        <div className="title-box clearfix">
                                        <span className="fl"><Icon type={item.type1} theme="twoTone" twoToneColor="#238e68"/>~~{item.title_T}</span>
                                        </div>
                                        {/* 图片加文字 */}
                                        <div className="cart_c">
                                        <Card
                                            style={{ width: "45%",height:238,float:"left",marginLeft:"3.5%" }}
                                            cover={<img  alt="example" src={item.src_L} onClick={this.gotoGoods.bind(this,1)}/>}>
                                            <Meta title={item.title_L} style={{textAlign:"center"}} onClick={this.gotoGoods.bind(this,1)}/>
                                        </Card>
                                        <Card
                                            style={{width: "45%",height:238,float:"left",marginLeft:"3.5%" }}
                                            cover={<img  alt="example" src={item.src_R}onClick={this.gotoGoods.bind(this,2)}/>}>
                                            <Meta title={item.title_R} style={{textAlign:"center"}} onClick={this.gotoGoods.bind(this,2)}/>
                                        </Card>
                                        </div>
                                        {/* 更多 */}
                                        <div className="more-work">
                                            <a className="more-a" onClick={this.gotoList.bind(this,item.num)} href='#'>更多分类
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