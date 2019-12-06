import React,{Component} from "react";
import { Icon } from 'antd';
import 'antd/dist/antd.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
          username:"wotuwang",
          password:"123456",
          userValue:false,
          pwdValue:false,
          menu:[
            {
              name:"home",
              path:'/home',
              text:'首页'
            }
          ]
        }
        this.login = this.login.bind(this);
        this.goto= this.goto.bind(this);
        this.success = this.success.bind(this);
      }
      componentDidMount(){
        let{history} = this.props;
        // history.push('/home');
        console.log(this.props,history);
      }
      login(){
        let res = this.refs.username.value
        if(res === this.state.username){
         this.setState({
           userValue:true
         })
         console.log("验证成功")
        }else{
          console.log("失败");
        }
      }
      goto(){
        let res = this.refs.password.value
        if(res === this.state.password){
         this.setState({
           pwdValue:true
         })
         console.log("验证成功")
        }else{
          console.log("失败");
        }
      }
      success(){
        console.log(this.state.userValue,this.state.pwdValue)
        // console.log(this.state.menu)
        let{history} = this.props;
        
        if (this.state.userValue == true && this.state.pwdValue == true) {
          history.push('/system');
          alert("登录成功");
        }else{
          alert("失败");
        }
      }
    render(){
        return (
            <div className="app-box">
                <h1 className="app-h1">后台管理系统</h1>
                <div className="app-form">
                <Icon type="user" />
                <input ref="username" onChange={this.login} className="app-username" type="text" placeholder="用户名"></input>
                <Icon type="lock" />
                <input ref="password" onChange={this.goto} className="app-password" type="password" placeholder="密码"></input><br/>
                <input type="checkbox" style={{width:15,height:15}}></input>
                <span>记住密码</span><br></br>
                <button onClick={this.success} className="app-but" style={{color:"white",fontSize:20}}>登录</button>
                </div>            
            </div>
        )
    }
}
// Login = withRouter(Login);

export default Login;