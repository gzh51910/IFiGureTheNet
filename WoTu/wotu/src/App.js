import React, { Component } from 'react';
import { Route, Redirect, Switch,withRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import List from './pages/List'
import SettingWall from './pages/SettingWall'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Goods from './pages/Goods'
import Mine from './pages/Mine'

import { Menu, Icon } from 'antd';
// import 'antd/dist/antd.css';
class App extends Component{
  state = {
       menu: [{
           name: 'home',
           path: '/home',
           icon: 'home',
           text: '首页'
         }, {
           name: 'list',
           path: '/list',
           icon: 'compass',
           text: '分类'
         },
         {
           name: 'settingwall',
           path: '/settingwall',
           icon: 'shopping-cart',
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
        let { history } = this.props;
        this.setState({
            currentPath: path
        })
        history.push(path)
    }
  
  render() {
    return (
      <div>
       <Menu
            onClick={this.goto}
            // selectedKeys={this.state.currentPath}
            mode="horizontal"
            theme='dark'
        >
            {
                this.state.menu.map(item => {
                return  <Menu.Item key={item.path}>
                          <Icon type={item.icon}/>
                          {item.text}
                     </Menu.Item>
                })
        }
        </Menu>
           <Switch>
              <Route path="/home" component={Home}/>
              <Route path="/list" component={List}/>
              <Route path="/settingwall" component={SettingWall} />
              <Route path="/mine" component={Mine}/>
              <Route path="/reg" component={Reg}/>
              <Route path="/login" component={Login}/>
              <Route path="/goods/:id" component={Goods} />
              <Route path="/notfound" render={()=><div>404页面</div>}/>
              <Redirect from="/" to="/home" exact/>
              <Redirect to="/notfound"/>
          </Switch> 
    </div>
   )
  }
}
App = withRouter(App);
export default App;
