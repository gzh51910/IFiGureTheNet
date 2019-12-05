import React, { Component } from 'react';
import '../css/goods.css';
import {Icon,Menu, Dropdown,Tabs,Card } from 'antd';
import axios from 'axios';
const { TabPane } = Tabs;
const { Meta } = Card;
function callback(key) {
    // console.log(key);
  }
let menu = (
    <Menu style={{background:"#f6f6f6",position:"absolute",top:"0.28rem",left:"-3.1rem",width:"7.5rem",height:"3.5rem",zIndex:"999"}}>
      <Menu.Item key="0" >
      <div className="last-classify">电视背景墙</div>
      <div className="last-classify">工装背景墙</div>
      <div className="last-classify">山水风景墙</div>
      </Menu.Item>
      <Menu.Item key="1" >
      <div className="last-classify">全屋背景墙</div>
      <div className="last-classify">笔画</div>
      <div className="last-classify">大理石贴图</div>
      </Menu.Item>
      <Menu.Item key="3" >
      <div className="last-classify">墙贴</div>
      <div className="last-classify">卫浴背景墙</div>
      <div className="last-classify">厨房背景墙</div>
          </Menu.Item>
    </Menu>
  );
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            list3:[],
            list4:[],
            list5:[]
        }
    }
     async componentDidMount(){
      let {data:{data}} = await axios.get("http://10.3.136.108:8011/goods/classify");
      let aa = await axios.get("http://10.3.136.108:8011/goods/classify1");
      let bb = await axios.get("http://10.3.136.108:8011/goods/classify2");
      this.setState({
          list3:data,
          list4:aa.data.data,
          list5:aa.data.data
      })
    //   console.log(this.state.list3);
    //   console.log(this.props);
      
      }
    gotoHome=()=>{
        // console.log(this.props);
        this.props.history.goBack("/home")
    }
    render() {
        let {params}=this.props.location
        return (
        <div className="bigBig">
            {/* 头部 */}
            <div className="classify-top">
                <div className="back" onClick={this.gotoHome}>< Icon type="left"
                        style={{
                           position: 'absolute',
                            top:'0',
                            left:"0",
                            color: '#fff',
                            fontSize: '0.5rem'
                        }}
                    /></div>
                    {/* 下拉菜单 */}
                <div className="nav-change">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#" style={{color:"#fff"}}>
                        {params} <Icon type="down" />
                        </a>
                    </Dropdown>
                </div>
                <div className="searchLink"><a >搜索<Icon type="search" style={{position:"absolute",
    top: "30%",
    right: "12%"}}/></a></div>
            </div>
            {/* Tab选项卡 */}
            <div className="Tab_tab">
            <Tabs defaultActiveKey="1" onChange={callback} style={{width:"100%"}}>
                <TabPane tab="综合排序" key="1" style={{width:"100%"}}>
                   {/* 图片加文字 */}
                   <div className="cart_c2">
                                    {
                                        this.state.list3.map(item=>{
                                            return   <Card
                                            key={item._id}
                                            style={{ width: "45%",height:"47.5%",float:"left",marginLeft:"3.5%",padding:"0.1rem",marginBottom:"0.15rem" }}
                                            cover={<img  alt="example" src={item.src_L} style={{height:"3.5rem"}}/>}>
                                            <Meta title={item.title2} style={{textAlign:"center"}}/>
                                        </Card>
                                        })
                                    }
                                        </div>
                </TabPane>
                <TabPane tab="最新上传" key="2" style={{width:"100%"}}>
                <div className="cart_c2">
                                    {
                                        this.state.list4.map(item=>{
                                            return   <Card
                                            key={item._id}
                                            style={{ width: "45%",height:"47.5%",float:"left",marginLeft:"3.5%",padding:"0.1rem",marginBottom:"0.15rem" }}
                                            cover={<img  alt="example" src={item.src_L} style={{height:"3.5rem"}}/>}>
                                            <Meta title={item.title2} style={{textAlign:"center"}}/>
                                        </Card>
                                        })
                                    }
                                        </div>
                </TabPane>
                <TabPane tab="最多下载" key="3" style={{width:"100%"}}>
                <div className="cart_c2">
                                    {
                                        this.state.list5.map(item=>{
                                            return   <Card
                                            key={item._id}
                                            style={{ width: "45%",height:"47.5%",float:"left",marginLeft:"3.5%",padding:"0.1rem",marginBottom:"0.15rem" }}
                                            cover={<img  alt="example" src={item.src_L} style={{height:"3.5rem"}}/>}>
                                            <Meta title={item.title2} style={{textAlign:"center"}}/>
                                        </Card>
                                        })
                                    }
                                        </div>
                </TabPane>
            </Tabs>
            </div>
            </div>
        )
    }
}
export default Login;