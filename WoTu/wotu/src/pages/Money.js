import React, { Component } from 'react'
import '../css/money.css';
import { Icon,Row, Col,Checkbox,Slider, InputNumber } from 'antd';
class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            t:'',
            t1:'',
            t2:'',
            inputValue: 1,
        }
        this.list=[
            {
                id:1,
                money:50,
                many:50,
            },
            {
                id:2,
                money:100,
                many:100,
            },
            {
                id:3,
                money:300,
                many:312,
            },
            {
                id:4,
                money:500,
                many:525,
            },
            {
                id:5,
                money:3000,
                many:3150,
            },
            {
                id:6,
                money:10000,
                many:10500,
            },
            {
                id:7,
                money:30000,
                many:31500,
            },
            {
                id:8,
                money:60000,
                many:61500,
            },
        ]
    }
    onChange1 = value => {
        this.setState({
          inputValue: value,
        });
      };
    onChange=(e)=> {
        // console.log(`checked = ${e.target.checked}`);
      }
    goto=()=>{
        this.props.history.push("/mine")
    }
    componentDidMount(){
        let t=localStorage.getItem('1')  
        let t1=localStorage.getItem('2')  
        let t2=localStorage.getItem('3')  
        this.setState({
                    t,
                    t1,
                    t2
                })
    }
    render() {
        // console.log(this.state.t,this.state.t1);
        // let {params}=this.props.location
        // if(params==undefined){
        //     params={
        //         zhanghao:"账号有误",
        //         ID:"ID有误",
        //         wotomoney:"我图币有误"
        //     }
        // } 
        const { inputValue } = this.state;
        // console.log(inputValue);
        return (
           <div className="bigBox">
               {/* 头部 */}
               <div className="classify-top">
                    <div className="back-btn" onClick={this.goto}>
                    <Icon type="left" style={{ fontSize: '0.32rem', color: '#fff' }}/>
                    </div>
                    <div className="nav-change">
                        <span>充值中心</span>
                    </div>
                </div>
                {/* 账号显示 */}
                <div className="hello clearfix margin-none">
                    <p className="fl"><i>账号：</i><span>{this.state.t.substr(0,7)}...</span><i>({this.state.t1})</i></p>
                    <p className="fr">当前余额: {this.state.t2}我图币</p>
                </div>
                {/* 选择充值金额 */}
                <div className="recharge-box">
                   <h4>选择充值金额</h4>
                </div>
                {/* 组件 */}
               <div className="smallBox">
                 <Row  gutter={[16, 16]} style={{"height":"1.64rem","margin": "0px"}}>
                {
                     this.list.map(item=>{
                        return  <Col key={item.id} span={12} style={{ width: "40%"}}>
                        <p style={{marginBottom:"0rem",marginTop:"0.1rem"}}>充<span>{item.money}</span>元</p>
                        <p style={{marginBottom:"0rem",marginTop:"0.1rem"}}>获取{item.many}我图币</p>
                        </Col>
                    })       
                }
                  </Row>
               </div>
               {/* 优惠券 */}
               <div className="couponCondition clearfix">
                    <div className="fr useCoupon">
                    <Row style={{width:"70%",float:"left",height:"100%"}}>
                        <Col span={12} style={{height:"100%",float:"left",margin:"0",width:"2.7rem",border:"0"}}>
                        <Slider
                            min={50}
                            max={60000}
                            onChange={this.onChange1}
                            value={typeof inputValue === 'number' ? inputValue : 0}
                        />
                        </Col>
                        <Col span={4} style={{height:"100%",float:"right",marginRight:"1.32rem"}}>
                        <InputNumber
                            min={50}
                            max={60000}
                            style={{ marginLeft: 16 }}
                            value={inputValue}
                            onChange={this.onChange1}
                        />
                        </Col>
                    </Row>
                    ~~~请选择金额
                    </div>
                </div>
                {/* 应付金额 */}
                <div className="pay-money">
                    <input type="hidden" name="orignal_money" value="50"/>
                    <input type="hidden" name="should-coupon-id" value="0"/>
                    <input type="hidden" name="should-pay" value=""/>
                    <p className="should-pay" style={{marginBottom:"0px"}}>应付金额：<span className="shoule_pay_money">50</span>元</p>
                    <p style={{marginBottom:"0px"}}><span className="notice-word">温馨提示:</span> 充值无使用时间限制,用完为止。</p>
                </div>
                {/* 支付方式 */}
                <div className="pay-way">
                    <div className="clearfix pay-way-list">
                        <span className="fl">
                           <Icon type="crown" theme="twoTone" style={{ fontSize: '16px',marginRight:"0.3rem"}}/>
                           支付宝
                        </span>
                        <span className="check"><Checkbox onChange={this.onChange}></Checkbox></span>
                    </div>
                    <div className="clearfix pay-way-list">
                        <span className="fl">
                        <Icon type="fire" theme="twoTone" twoToneColor="#0ec5a1" style={{ fontSize: '16px',marginRight:"0.3rem"}}/>
                            微信</span>
                        <span className="check1"><Checkbox onChange={this.onChange}></Checkbox></span>
                    </div>
                    <div className="agree">
                        <p><span>*</span>《消费协议》 注：1元=1我图币</p>
                    </div>
                </div>
                {/* 填充条 */}
                <div className="pay-moneyq"></div>
               {/* 底部 */}
                <div className="pay-now">
                    <h5>立刻充值</h5>
                </div>
           </div>
        )
    }
}
export default Login;