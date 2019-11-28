import React from 'react';
import {render} from 'react-dom';
import { HashRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import './js/flexble'
import App from './App';

render(
    // <Provider store={3}>
        <HashRouter>
            <App/>
        </HashRouter>
    // </Provider >
    ,
    document.getElementById('root')
);

// serviceWorker.unregister();
