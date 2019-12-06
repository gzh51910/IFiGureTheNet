import React from 'react';
import {Route,Switch,Redirect} from "react-router-dom";
import System from './pages/System';
import Login from './pages/Login';
import Reg from './pages/Reg'
import Search from './pages/Search'
import Add from './pages/Add'
import Update from './pages/Update';
import './App.css';
import 'antd/dist/antd.css';

class App extends React.Component{


  render(){
    
    return (
        <div>
           <Switch>
            <Route path="/login" component = {Login} />
            <Route path="/system" component={System} />
            <Route path='/reg' component={Reg} />
            <Route path='/search' component={Search}/>
            <Route path ='/add' component={Add}/>
            <Route path='/update' component = {Update}/>
            <Redirect from="/" to="/login" exact/>
          </Switch>
        </div>     
    )
  }
}

export default App;
