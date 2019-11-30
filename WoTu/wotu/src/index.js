import React from 'react';
import {render} from 'react-dom';
import { HashRouter,Route } from 'react-router-dom'
import {Provider} from 'react-redux';
import './js/flexble'
import App from './App';

render(
    // <Provider store={3}>
        <HashRouter>
            <Route> <App/></Route>
           
        </HashRouter>
    // </Provider >
    ,
    document.getElementById('root')
);
