import React, { Component } from 'react'
import '../css/detail.css';
import { Menu, Dropdown, Icon,Button,Card } from 'antd';
const { Meta } = Card;
let menu = (
    <Menu style={{textAlign:"left"}}>
      <Menu.Item >
        <a target="_blank" rel="noopener noreferrer">
          1、编号 : 23218603<i style={{float:"right",color:"#40a9ff"}}>点击收起</i>
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          2、软件 : Photoshop CC(.tif分层)
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          3、颜色模式 : RGB
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          4、路径图 : 包含路径图
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          5、线稿图 : 包含线稿图
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          6、分辨率 : 150 dpi
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          7、像素 : 宽4724 X 高8268 像素
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          8、印刷尺寸 : 宽80 X 高140 厘米
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          9、体积 : 579.83MB
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          10、上传时间 : 2019-10-16
        </a>
      </Menu.Item>
    </Menu>
  );
class Reg extends Component {
    constructor(props){
        super(props)
        // console.log(this.props.location.params);
        
    }
    state={
        list2:[
            {
                "num2":"1",
                "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title2":"装饰画",
                "src_R":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title3":"装饰画",
            },
            {
                "num2":"2",
                "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title2":"装饰画",
                "src_R":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title3":"装饰画",
            },
            {
                "num2":"3",
                "src_L":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title2":"装饰画",
                "src_R":"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                "title3":"装饰画",
            },
        ]
    }
    gotoList=()=>{
       this.props.history.goBack("/list")
    }
    gotoHome=()=>{
        this.props.history.push("/home")
            }
    render() {
        let {params}=this.props.location
        if(params==undefined){
            params=localStorage.getItem("4")
        }
        // console.log(localStorage.getItem("4"));
        
        return (
                <div className="bigBox">
                    {/* 头部 */}
                    <div className="top-box clearfix">
                        <div className="fl back-btn">
                        <Icon type="left" onClick={this.gotoList} style={{ fontSize: '22px', color: '#fff' }}/>
                        </div>
                            <div className="fr shareBox">
                            <Icon type="share-alt" style={{ fontSize: '22px', color: '#fff' }}/>
                        </div>
                            <div className="fr really-search clearfix">
                            <input  type="input" placeholder="请输入标题、关键词搜索"/>
                            <a><Icon type="search" style={{ fontSize: '22px', color: '#999' }}/></a>
                        </div>
                    </div>
                    {/* 大图片 */}
                    <div className="pic-show">
                        <div className="pic">
                            <img src={params}/>
                            </div>
                        <div className="look-big-img">点击查看大图
                          <Icon type="search" style={{ fontSize: '16px', color: '#999',paddingLeft:"0.1rem" }}/>
                        </div>
                    </div>
                    {/* 新中式 */}
                    <div className="work-details">
                        <div className="clearfix workName">
                            <h1 className="fl">新中式后现代珐琅彩高档山水麋鹿轻奢客厅装饰画</h1>
                            <div className="fr downloadPreview downPreviewPic">
                            <Icon type="download" />下载预览
                            </div>
                        </div>
                        <div className="clearfix num-show">
                            <span className="fl price-show">价格：78我图币</span>
                        </div>
                    </div>
                    {/* 编号 */}
                    <div className="work-infor">
                        <Dropdown overlay={menu} placement="bottomCenter" style={{width:"100%"}}>
                            <Button style={{width:"100%"}}>点击查看商品的详细信息</Button>
                        </Dropdown>
                    </div>
                    {/* 正版授权 */}
                    <div className="bz-box clearfix">
                        <div className="fl"><i>正</i>正版授权</div>
                        <div className="fl"><i>质</i>质量保证</div>
                        <div className="fl"><i>售</i>售后服务</div>
                    </div>
                    {/* 相似 */}
                    <p className="simlar-title">相似作品</p>
                    {/* 卡片 */}
                    <div className="lei">
                      {
                          this.state.list2.map(item=>{
                              return   <div className="cart_c" key={item.num2}>
                                        <Card
                                            style={{ width: "45%",height:238,float:"left",marginLeft:"3.5%",marginBottom:"0.3rem" }}
                                            cover={<img alt="example" src={item.src_L}/>}>
                                            <Meta title={item.title2} style={{textAlign:"center"}}/>
                                        </Card>
                                        <Card
                                            style={{ width: "45%",height:238,float:"left",marginLeft:"3.5%",marginBottom:"0.3rem"}}
                                            cover={<img alt="example" src={item.src_R}/>}>
                                            <Meta title={item.title3} style={{textAlign:"center"}}/>
                                        </Card>
                                        </div>
                          })
                      }
                    </div>
                    {/* footer */}
                    <div className="details-fixed-bottom">
                        <a onClick={this.gotoHome}  className="fl index-back">
                        <Icon type="home"style={{ fontSize: '20px', color: '#999',marginTop:"0.15rem" }}/><br/>
                            <span>首页</span>
                        </a>
                        <a className="join-coll fl">加入收藏</a>
                        <a className="join-download fl">立即下载</a>
                    </div>
                </div>
        )
    }
}
export default Reg;