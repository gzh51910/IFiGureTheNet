import React from 'react';
import '../css/system.css';
import '../css/home.css';
import axios from "axios";
import { Layout, Menu, Icon,Button,Table,Popconfirm ,Form , Input } from 'antd';
import { relative } from 'path';
const { SubMenu } = Menu;
const {Content, Sider } = Layout;
  
  
  
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);



class EditableCell extends React.Component {
    state = {
      editing: false,
    };
  
    toggleEdit = () => {
      const editing = !this.state.editing;
      this.setState({ editing }, () => {
        if (editing) {
          this.input.focus();
        }
      });
    };
  
    save = e => {
      const { record, handleSave } = this.props;
      this.form.validateFields((error, values) => {
        if (error && error[e.currentTarget.id]) {
          return;
        }
        this.toggleEdit();
        handleSave({ ...record, ...values });
      });
    };
  
    renderCell = form => {
      this.form = form;
      const { children, dataIndex, record, title } = this.props;
      const { editing } = this.state;
      return editing ? (
        <Form.Item style={{ margin: 0 }}>
          {form.getFieldDecorator(dataIndex, {
            rules: [
              {
                required: true,
                message: `${title} is required.`,
              },
            ],
            initialValue: record[dataIndex],
          })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{ paddingRight: 24 }}
          onClick={this.toggleEdit}
        >
          {children}
        </div>
      );
    };
  
    render() {
      const {
        editable,
        dataIndex,
        title,
        record,
        index,
        handleSave,
        children,
        ...restProps
      } = this.props;
      return (
        <td {...restProps}>
          {editable ? (
            <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
          ) : (
            children
          )}
        </td>
      );
    }
  }





class System extends React.Component{
    constructor(){
        super();
        this.gotoList = this.gotoList.bind(this);
        this.gotoAdd = this.gotoAdd.bind(this);
        this.gotoUpdate = this.gotoUpdate.bind(this);
        this.aaa = this.aaa.bind(this);
 // state = {
    //     selectedRowKeys: [], 
    //     loading: false,
    //     osa:[]
    //   };

        this.columns = [
            {
                title:"#",
                dataIndex:"#"
            },
            {
              title: '商品名称',
              dataIndex: 'name',
              width: '30%',
              editable: true,
            },
            {
              title: '库存',
              dataIndex: 'num',
            },
            {
              title: '价格',
              dataIndex: 'price',
            },
            {
                title:'时间',
                dataIndex:'time',
            },
            {
              title: '操作',
              dataIndex: 'operation',
              render: (text, record) =>
                this.state.dataSource.length >= 1 ? (
                  <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                    <a>Delete</a>
                  </Popconfirm>
                ) : null,
            },
          ];
      
          this.state = {
            dataSource: [
              {
                key: '0',
                name: 'Edward King 0',
                num: '32',
                price: 'London, Park Lane no. 0',
                _id:"2"
              },
              {
                key: '1',
                name: 'Edward King 1',
                num: '32',
                time: 'London, Park Lane no. 1',
                _id:"1"
              },
            ],
            count: 2,
            selectedRowKeys: [], 
            loading: false,
            osa:[]
          };


    }
    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
      };
    
      handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
          key: count,
          name: `Edward King ${count}`,
          age: 32,
          address: `London, Park Lane no. ${count}`,
        };
        this.setState({
          dataSource: [...dataSource, newData],
          count: count + 1,
        });
      };
    
      handleSave = row => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ dataSource: newData });
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
     aaa(){
        //  let bc = document.getElementsByClassName("delete");
        //  bc[0].onclick  = function(){
        //      console.log(6666);
        //  }
        // console.log("数据",columns[5].render().ref,bc[0])
        // console.log(text);
     }
     async componentDidMount(){
        let {data:{data}} = await axios.get("http://localhost:8011/goods/findAll");
        this.setState({
            osa:data
        })
     }
    
    render(){

        const { dataSource } = this.state;
        const components = {
          body: {
            row: EditableFormRow,
            cell: EditableCell,
          },
        };
        const columns = this.columns.map(col => {
          if (!col.editable) {
            return col;
          }
          return {
            ...col,
            onCell: record => ({
              record,
              editable: col.editable,
              dataIndex: col.dataIndex,
              title: col.title,
              handleSave: this.handleSave,
            }),
          };
        });


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
                            height:700,
                        }}
                        >
                        <div>
                            <div style={{ marginBottom: 16 }}>
                            <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
                                Reload
                            </Button>
                            <span style={{ marginLeft: 8 }}>
                                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                            </span>
                            </div>
                            {/* <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.osa} key={this.state.osa} /> */}
                                
                           
                        </div>
                        </Content>
                    </Layout>
                    </Layout>
                </Layout>

                {/* <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
                    Add a row
                </Button> */}
                <Table
                    components={components}
                    rowClassName={() => 'editable-row'}
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                />
            </div>
        )
    }
}

export default System;