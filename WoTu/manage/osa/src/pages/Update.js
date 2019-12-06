import React from 'react';
import axios from "axios";
import { Layout, Menu, Icon, Input , Cascader,Button } from 'antd';
const { SubMenu } = Menu;
const {Content, Sider } = Layout;
const { Search } = Input;


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

  

class Update extends React.Component{
    constructor(){
        super();
        this.gotoAdd = this.gotoAdd.bind(this);
        this.gotoUpdate = this.gotoUpdate.bind(this);
        this.gotoSystem = this.gotoSystem.bind(this);
        this.sure = this.sure.bind(this);
    }

    state = {
        selectedRowKeys: [], 
        loading: false,
        osa:[]
      };
    
      start = () => {
        this.setState({ loading: true });
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
     gotoAdd(){
         this.props.history.push('/add');
     }
     gotoSystem(){
        this.props.history.push('/system');
    }
    gotoAdd(){
       this.props.history.push('/add');
    }
    gotoUpdate(){
       this.props.history.push('/update');
    }
    async sure(){
        let id = this.refs.id.value;
        let name = this.refs.name.value;
        let num = this.refs.num.value;
        let price = this.refs.time.value;
        let time = this.refs.price.value;
        // console.log(IdValue,NameValue,NumValue,TimeValue,PriceValue)
        let result= await axios.patch("http://localhost:8011/goods/update",{
            id,name,time,num,price
        })
        if(result.status == 200){
            this.refs.id.value = "";
            this.refs.name.value = "";
            this.refs.num.value = "";
            this.refs.time.value = "";
            this.refs.price.value = "";
            alert("修改成功");
        }
    }

     async componentDidMount(){
        console.log("数据",this.refs.sear);
     }

    render(){
        const { selectedRowKeys } = this.state;
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
                        defaultSelectedKeys={['4']}
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
                            <Menu.Item key="2">商品查询</Menu.Item>
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
                            height:730
                        }}
                        >
                        <div>
                            <div style={{ marginBottom: 16 }}>
                             <Search  
                                placeholder="请输入商品名称"
                                enterButton="Search"
                                size="large"
                                onSearch={async (value) => {
                                    let {data:{data}} = await axios.get("http://localhost:8011/goods/findOne",{params:{value}});
                                    this.setState({
                                        osa:data[0]._id
                                    })
                                    console.log(this.state.osa);
                                }}
                             />
                            <span style={{ marginLeft: 8 }}>
                                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                            </span>
                            </div>

                            <label className="add-lab">商品ID:</label>
                            <input ref="id" style={{width:400,height:40,paddingLeft:10}} type="type" placeholder="请输入商品名称" value={this.state.osa.length>0?this.state.osa:""}></input><br/><br/>
                            <label className="add-lab">修改名称:</label>
                            <input ref="name" style={{width:400,height:40,paddingLeft:10}} type="type" placeholder="请输入商品名称"></input><br/><br/>
                            <label className="add-lab">修改库存:</label>
                            <input ref="num" style={{width:400,height:40,paddingLeft:10}} type="type" placeholder="请输入商品库存"></input><br/><br/>                          
                            <label className="add-lab">修改价格:</label>
                            <input ref="price" style={{width:130,height:40,paddingLeft:10}} type="type" placeholder="请输入商品价格"></input><br/><br/>
                            <label className="add-lab">修改时间:</label>
                            <input ref="time" style={{width:400,height:40,paddingLeft:10}} type="type" placeholder="请输入时间"></input><br/><br/>
                            <label className="add-lab">修改分类:</label>
                            <Cascader options={options} placeholder="Please select" /><br/><br/>
                            <label className="add-lab" style={{}}>修改描述:</label>
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
                        </div>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>
            </div>
        )
    }
}

export default Update;