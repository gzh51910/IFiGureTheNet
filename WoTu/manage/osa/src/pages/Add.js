import React from 'react';
import { Layout, Menu, Icon,Button,Cascader  } from 'antd';
import '../css/add.css';
import axios from "axios";
const { SubMenu } = Menu;
const {Content, Sider } = Layout;

const options = [
    {
      value: 'name1',
      label: '背景墙/壁纸',
    },
    {
      value: 'name2',
      label: '地面/吊顶设计',
    },
    {
      value: 'name2',
      label: 'CAD图/模型库',
    },{
      value: 'name3',
      label: '平面/展板',
    },{
      value: 'name4',
      label: '其它',
    },

  ];
  
  

class Add extends React.Component{
    constructor(){
        super();
        this.gotoList = this.gotoList.bind(this);
        this.sure = this.sure.bind(this);
        this.gotoSystem = this.gotoSystem.bind(this);
        this.gotoUpdate = this.gotoUpdate.bind(this);
    }

    
     gotoList(){
         console.log(this.props);
         this.props.history.push('/search')
     }
     gotoSystem(){
         this.props.history.push('/system');
     }
     gotoUpdate(){
        this.props.history.push('/update');
     }

     async sure(){
         let valNum = this.refs.num.value;
         let valName = this.refs.name.value;
         let valPrice = this.refs.price.value;
         let valTime = this.refs.time.value;
         if(valName == "" && valNum == "" && valPrice == "" && valTime == ""){
            alert("请完整填写信息")
         }else{
             let data = await axios.post("http://localhost:8011/goods/addAll",{
                "num":valNum,
                "name":valName,
                "price":valPrice,
                "time":valTime
             })
             if(data.status==200){
                this.refs.num.value = ''
                this.refs.name.value = ''
                this.refs.price.value = ''
                this.refs.time.value = ''
                alert("添加成功");
             }else{
                 console.log("添加失败");
             }
             
         }
     }
    
    render(){
       
        return (
            <div className="add-box">
                <Layout>
                    {/* <Header className="header">
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">nav 1</Menu.Item>
                        <Menu.Item key="2">nav 2</Menu.Item>
                        <Menu.Item key="3">nav 3</Menu.Item>
                    </Menu>
                    </Header> */}
                    <Layout>
                    <Sider width={250} style={{ background:"red",height:740 }}>
                        <Menu theme="dark" style={{width:250}}>
                            <Menu.Item key="1" style={{fontSize:20}}>后台管理系统</Menu.Item>
                        </Menu>
                        <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['3']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%',height:692,width:250, borderRight: 0 }}
                        >
                            
                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <Icon type="user" />
                                商品管理
                            </span>
                            }
                        >
                            <Menu.Item key="1" onClick={this.gotoSystem}>商品列表</Menu.Item>
                            <Menu.Item key="2" onClick={this.gotoList}>商品查询</Menu.Item>
                            <Menu.Item key="3">添加商品</Menu.Item>
                            <Menu.Item key="4" onClick={this.gotoUpdate}>商品修改</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                <Icon type="laptop" />
                               用户管理
                            </span>
                            }
                        >
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                            <span>
                                <Icon type="notification" />
                                订单管理
                            </span>
                            }
                        >
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 52px 24px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            height:700
                        }}>
                            <Button style={
                                    {
                                        background:"#f5f5f5",
                                        borderColor:"#d9d9d9",
                                        color:"black",
                                        width:130,height:40
                                    }
                                } type="primary">添加商品</Button><br/><br/>
                            <label className="add-lab">商品库存:</label>
                            <input ref="num" style={{width:400,height:40,paddingLeft:10}} type="type" placeholder="请输入商品库存"></input><br/><br/>
                            <label className="add-lab">商品名称:</label>
                            <input ref="name" style={{width:400,height:40,paddingLeft:10}} type="type" placeholder="请输入商品名称"></input><br/><br/>
                            <label className="add-lab">商品价格:</label>
                            <input ref="price" style={{width:130,height:40,paddingLeft:10}} type="type" placeholder="请输入商品价格"></input><br/><br/>
                            <label className="add-lab">添加时间:</label>
                            <input ref="time" style={{width:400,height:40,paddingLeft:10}} type="type" placeholder="请输入时间"></input><br/><br/>
                            <label className="add-lab">商品分类:</label>
                            <Cascader options={options} placeholder="Please select" /><br/><br/>
                            <label className="add-lab" style={{}}>商品描述:</label>
                            <textarea style={{width:500,height:150}}></textarea><br/><br/>
                            
                            <Button 
                                type="danger"
                                onClick={this.sure}
                                style={
                                    {
                                        width:150,
                                        height:50,
                                        marginTop:30,
                                        fontSize:18
                                    }
                                        }>确认</Button>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Add;