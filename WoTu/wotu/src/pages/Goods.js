import React, { Component } from 'react';
import '../css/goods.css';
import {Icon,Menu, Dropdown,Tabs,Card } from 'antd';
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
    gotoHome=()=>{
        // console.log(this.props);
        this.props.history.goBack("/home")
    }
    render() {
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
                        背景墙 <Icon type="down" />
                        </a>
                    </Dropdown>
                </div>
                <div className="searchLink"><a href="#">搜索<Icon type="search" style={{position:"absolute",
    top: "30%",
    right: "12%"}}/></a></div>
            </div>
            {/* Tab选项卡 */}
            <div className="Tab_tab" style={{ textAlign: 'center',
        fontSize:' 0.28rem'}}>
            <Tabs defaultActiveKey="1" onChange={callback} style={{width:"100%"}}>
                <TabPane tab="综合排序" key="1" style={{width:"100%"}}>
                   {/* 图片加文字 */}
                   <div className="cart_c2">
                                        <Card
                                            style={{ width: "45%",height:"47.5%",float:"left",marginLeft:"3.5%",padding:"0.1rem",marginBottom:"0.15rem" }}
                                            cover={<img  alt="example" src="https://bpic.wotucdn.com/23/46/82/23468271-c6bed9da15df816f8ea6ffe73d886fef.jpg!/fw/325/quality/90/unsharp/true/compress/true/canvas/325x325a0a0/format/webp" style={{height:"3.5rem"}}/>}>
                                            <Meta title="我的" style={{textAlign:"center"}}/>
                                        </Card>
                                        <Card
                                            style={{width: "45%",height:"47.5%",float:"left",marginLeft:"3.5%",padding:"0.1rem",marginBottom:"0.15rem" }}
                                            cover={<img  alt="example" src="https://bpic.wotucdn.com/23/46/82/23468271-c6bed9da15df816f8ea6ffe73d886fef.jpg!/fw/325/quality/90/unsharp/true/compress/true/canvas/325x325a0a0/format/webp" style={{height:"3.5rem"}}/>}>
                                            <Meta title="我的" style={{textAlign:"center"}}/>
                                        </Card>
                                        <Card
                                            style={{ width: "45%",height:"47.5%",float:"left",marginLeft:"3.5%",padding:"0.1rem",marginBottom:"0.15rem" }}
                                            cover={<img  alt="example" src="https://bpic.wotucdn.com/23/46/82/23468271-c6bed9da15df816f8ea6ffe73d886fef.jpg!/fw/325/quality/90/unsharp/true/compress/true/canvas/325x325a0a0/format/webp" style={{height:"3.5rem"}}/>}>
                                            <Meta title="我的" style={{textAlign:"center"}}/>
                                        </Card>
                                        <Card
                                            style={{width: "45%",height:"47.5%",float:"left",marginLeft:"3.5%",padding:"0.1rem",marginBottom:"0.15rem" }}
                                            cover={<img  alt="example" src="https://bpic.wotucdn.com/23/46/82/23468271-c6bed9da15df816f8ea6ffe73d886fef.jpg!/fw/325/quality/90/unsharp/true/compress/true/canvas/325x325a0a0/format/webp" style={{height:"3.5rem"}}/>}>
                                            <Meta title="我的" style={{textAlign:"center"}}/>
                                        </Card>
                                        <Card
                                            style={{ width: "45%",height:"47.5%",float:"left",marginLeft:"3.5%",padding:"0.1rem",marginBottom:"0.15rem" }}
                                            cover={<img  alt="example" src="https://bpic.wotucdn.com/23/46/82/23468271-c6bed9da15df816f8ea6ffe73d886fef.jpg!/fw/325/quality/90/unsharp/true/compress/true/canvas/325x325a0a0/format/webp" style={{height:"3.5rem"}}/>}>
                                            <Meta title="我的" style={{textAlign:"center"}}/>
                                        </Card>
                                        <Card
                                            style={{width: "45%",height:"47.5%",float:"left",marginLeft:"3.5%",padding:"0.1rem",marginBottom:"0.15rem" }}
                                            cover={<img  alt="example" src="https://bpic.wotucdn.com/23/46/82/23468271-c6bed9da15df816f8ea6ffe73d886fef.jpg!/fw/325/quality/90/unsharp/true/compress/true/canvas/325x325a0a0/format/webp" style={{height:"3.5rem"}}/>}>
                                            <Meta title="我的" style={{textAlign:"center"}}/>
                                        </Card>
                                        </div>
                </TabPane>
                <TabPane tab="最新上传" key="2" style={{width:"100%"}}>
                Content of Tab Pane 2
                </TabPane>
                <TabPane tab="最多下载" key="3" style={{width:"100%"}}>
                Content of Tab Pane 3
                </TabPane>
            </Tabs>
            </div>
            </div>
        )
    }
}
export default Login;