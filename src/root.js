import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter} from 'react-router-dom';
import {AppContainer} from 'react-hot-loader';

import App from './components/app';

ReactDOM.render((
    <AppContainer>
        <HashRouter>
            <App/>
        </HashRouter>
    </AppContainer>
), document.getElementById('root'));
