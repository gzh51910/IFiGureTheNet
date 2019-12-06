import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Home from './pages/Home';
import {HashRouter} from 'react-router-dom';
// import Login from './pages/Login';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
document.getElementById('root'));
