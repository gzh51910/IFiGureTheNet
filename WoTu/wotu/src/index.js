import React from 'react';
import {render} from 'react-dom';
import { HashRouter,Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import './js/flexble'
import store from './store'
import App from './App';

render(
    <Provider store={store}>
        <HashRouter>
            <App/>
           
        </HashRouter>
     </Provider >
    ,
    document.getElementById('root')
);
