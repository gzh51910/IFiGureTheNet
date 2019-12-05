import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import './js/flexble'
import store from './store'
import App from './App';

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
           
        </BrowserRouter>
     </Provider >
    ,
    document.getElementById('root')
);
