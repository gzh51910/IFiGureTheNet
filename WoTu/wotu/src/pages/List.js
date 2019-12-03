
import React, { Component } from 'react'
import '../css/list.css';
import { Input,Icon,Tabs,Divider,Carousel,Card, Radio} from 'antd';
import axios from 'axios';
const { Meta } = Card;
const { Search } = Input;
const { TabPane } = Tabs;
class List extends Component{
    constructor(props) {
        super(props);
        console.log(this.props.location.params);
      }
      handleModeChange = e => {
        const mode = e.target.value;
        this.setState({ mode });
      };
    
    state = {
        mode: 'left',
        menu: [],
    }
    gotoDetail=(src)=>{
        this.props.history.push({
            pathname:`/detail`,
            params:src
        })
    }
    gotoHome=()=>{
        this.props.history.push("/home");
    }
    async componentDidMount(){
        let {data:{data}} = await axios.get("http://localhost:8011/goods/find5");
        // console.log(data);
        let arr = [];
        data.forEach(item=>{
        arr.push(item)
        })
        for(var i=0;i<arr.length;i++){
            let b=arr[i].title3
            for(var e=0;e<b.length;e++){
                b[e].src_L=require('../img/image/'+b[e].src_L)
            }
        }
        this.setState({
           menu:data
        })
        // console.log(data);
        
        };
    render() {
        const { mode,menu } = this.state;    
        console.log("wert",typeof this.props.location.params);
        return (
            <section style={{width:"100%",height:"100%"}}>
                <article className = 'Search-warp' >
                    < Icon type="left"
                        style={{
                           position: 'absolute',
                            left: '0.4rem',
                            top:'15%',
                            color: '#fff',
                            fontSize: '0.5rem'
                        }}
                        onClick={this.gotoHome}
                    />
                    <Search
                        style={{ width: '70%',height:'80%',borderRadius:'30%',position:"absolute",top:"10%",left:"1.5rem"}}
                        className='Search'
                        placeholder="请输入标题、关键词搜索"
                        onSearch={value => console.log(value)}
                        />
                </article>
               <article style={{width:"100%",height:"12rem",position:"fixed",top:"0.24rem"}}>
                    <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8}}>
                    <Radio.Button value="top">Horizontal</Radio.Button>
                    <Radio.Button value="left">Vertical</Radio.Button>
                    </Radio.Group>
                    <Tabs defaultActiveKey={this.props.location.params + ""} tabPosition={mode} style={{ height: "94%",width:"100%",position:"fixed",top:"7.5%" }}>
                    {[...Array(13).keys()].map(i => (
                        <TabPane tab={
                            (this.state.menu.length>0)?this.state.menu[i].name:""} key={i}>
                             <div   style={{ width: "90%",
                                     height: "20%",
                                     background: "#0EC5A1",
                                     lineHeight: "0.8rem",
                                     textAlign:"center",
                                     color:"#fff",
                                     margin:"5% auto",
                                    }}>进入{
                                    (this.state.menu.length>0)?this.state.menu[i].name:""}频道</div>
                                    {/* 分类线 */}
                            <article style={{width:'5rem',margin:"auto"}}>
                                < Divider className ='divider'> <span style={{fontSize:'12px'}}>主要分类</span> </Divider>
                            </article>
                            {/* {console.log(this.state.menu[i])} */}
                            {/* 列表循环 */}
                            <article className="list_tab">
                            {
                               (this.state.menu.length>0)?this.state.menu[i].title3.map(item1=>{
                                    return  <Card
                                    key={item1.num2}
                                    style={{ width: "1.4rem",height:"2rem",float:"left",marginRight:"5%",marginBottom:"0.3rem"}}
                                    cover={<img onClick={this.gotoDetail.bind(this,[item1.src_L,item1.title2,item1.num2])} alt="example" src={item1.src_L} style={{ height: "1.5rem"}}/>}>
                                    <Meta title={item1.title2} style={{position:"absolute",top:"1.2rem"}}/>
                                </Card>
                                }):""
                            }
                </article>
                        </TabPane>
                    ))}
                    </Tabs>
               </article>
            </section>
        )
    }
}
export default List;