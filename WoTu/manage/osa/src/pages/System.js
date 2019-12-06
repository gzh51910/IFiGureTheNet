import React from 'react';
import '../css/home.css';
import axios from "axios";
import { Layout, Menu, Icon,Table,Input } from 'antd';
const { SubMenu } = Menu;
const {Content, Sider } = Layout;
const { Search } = Input;

const columns = [
    {
      title: '#',
      dataIndex: '_id',
    },
    {
      title: '商品名称',
      dataIndex: 'name',
    },{
        title:'库存',
        dataIndex:'num'
    },
    {
      title: '价格',
      dataIndex: 'price',
    },{
        title:"时间",
        dataIndex:"time"
    },{
        title:"操作",
        dataIndex:"operation",
        render:()=><a className="aa">删除</a>
    },
  ];
  
  
  
  

class System extends React.Component{
    constructor(){
        super();
        this.gotoList = this.gotoList.bind(this);
        this.gotoAdd = this.gotoAdd.bind(this);
        this.gotoUpdate = this.gotoUpdate.bind(this);
    }

    state = {
        selectedRowKeys: [], 
        loading: false,
        osa:[]
      };
    
      start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
          this.setState({
            selectedRowKeys: [],
            loading: false,
          });
        }, 1000);
      };
    
      onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      };
     gotoList(){
         console.log(this.props);
         this.props.history.push('/search')
     }
     gotoAdd(){
         this.props.history.push('/add');
     }
     gotoUpdate(){
         this.props.history.push('/update');
     }

     async componentDidMount(){
        let {data:{data}} = await axios.get("http://localhost:8011/goods/findAll");
        this.setState({
            osa:data
        })
     }
    
    render(){
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
        selectedRowKeys,
        onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className="home-box">
                <Layout>
                    <Layout>
                    <Sider width={250} style={{ background:"red",height:740 }}>
                        <Menu theme="dark" style={{width:250}}>
                            <Menu.Item key="1" style={{fontSize:20}}>后台管理系统</Menu.Item>
                        </Menu>
                        <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
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
                            <Menu.Item key="1">商品列表</Menu.Item>
                            <Menu.Item key="2" onClick={this.gotoList}>商品查询</Menu.Item>
                            <Menu.Item key="3" onClick={this.gotoAdd}>添加商品</Menu.Item>
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
                        <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            height:700
                        }}
                        >
                        <Search  
                                placeholder="请输入商品名称"
                                enterButton="Delete"
                                size="large"
                                onSearch={ async (value) => {
                                     const dataDel = await axios.get("http://localhost:8011/goods/removeuser",{params:{value}});
                                     if(dataDel.status == 200){
                                        alert("删除成功");

                                     }else{
                                         alert("删除失败");
                                     }
                                    let {data:{data}} = await axios.get("http://localhost:8011/goods/findAll");
                                    this.setState({
                                        osa:data
                                    })
                                }}
                             />
                        <div>
                            <div style={{ marginBottom: 16 }}>
                            {/* <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                                Reload
                            </Button> */}
                            <span style={{ marginLeft: 8 }}>
                                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                            </span>
                            </div>
                            <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.osa} key={this.state.osa} />
                                
                           
                        </div>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default System;