import React, { Component } from 'react';
import { Route, Redirect, Switch,withRouter } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import List from './pages/List'
import SettingWall from './pages/SettingWall'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Goods from './pages/Goods'
import Mine from './pages/Mine'
import Money from './pages/Money'
import Detail from './pages/Detail'
import MyCenter from './pages/MyCenter'
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios'
import {
  connect
} from 'react-redux'
//  映射属性（获取）
const mapStateToProps = (state) => {
  let {
    user
  } = state.common;
  let phone = user.phone;
  return {
    user,
    phone
  }
}

class App extends Component{
  state = {
    currentPath:"",
    menu: [
      {
           name: 'home',
           path: '/home',
           icon: 'home',
           text: '首页'
         }, {
           name: 'list',
           path: '/list',
           icon: 'appstore',
           text: '分类'
         },
         {
           name: 'settingwall',
           path: '/settingwall',
           icon: 'database',
           text: '背景墙'
         }, {
           name: 'mine',
           path: '/mine',
           icon: 'user',
           text: '我的'
         },
       ]
  }
  goto = ({ key: path }) => {
    let { history} = this.props;
        this.setState({
            currentPath: path
        })
    
    // 获取token
    let Authorization = localStorage.getItem("Authorization");
    if (Authorization) {
      // 校验token是否过期或者被更改
      axios.get('http://localhost:8011/verify', {
        headers: {
          Authorization
        }
      }).then(({ data }) => {
        if (path === '/mine' && data.status === 0) {
          history.push('/mycenter')
       }
        
      })
    } 
    if (path === '/mine' && Authorization=== null) {
          path ="/mycenter"
        }
        history.push(path)
  }
  componentDidMount() {
    console.log(this.props.history);
    
    this.setState({
      currentPath: this.props.history.location.pathname ? this.props.history.location.pathname : './home'
    })
  }
  
  render() {
    return (
      <div>
          <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/list" component={List}/>
              <Route path="/settingwall" component={SettingWall} />
              <Route path="/mine" component={Mine} />
              <Route path="/reg" component={Reg}/>
              <Route path="/login" component={Login}/>
              <Route path="/detail" component={Detail}/>
              <Route path="/mycenter" component={MyCenter} />
              <Route path="/goods/:id" component={Goods} />
              <Route path="/money" component={Money} />
              <Route path="/notfound" render={()=><div>404页面</div>}/>
              <Redirect from="/" to="/home" exact/>
              <Redirect to="/notfound"/>
          </Switch> 
       <Menu
            onClick={this.goto}
            selectedKeys={this.state.currentPath}
            mode="horizontal"
            style={{borderTop:'1px solid #e8e8e8',fontSize:'0.28rem'}}
        >
            {
                this.state.menu.map(item => {
                  return <Menu.Item key={item.path}
                        style={{   display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                // flexDirection:'column'
                        }}
                  >
                    <Icon type={item.icon} style={{fontSize:'0.28rem'}}/>
                         {item.text}
                     </Menu.Item>
                })
        }
        </Menu>
         
    </div>
   )
  }
}
App = connect(mapStateToProps)(App)
App = withRouter(App);
export default App;