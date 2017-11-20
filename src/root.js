import 'react-hot-loader/patch';
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import {AppContainer} from 'react-hot-loader';

import App from './components/app';

const history = createBrowserHistory();

const location = history.location;

const rootEl = document.getElementById('root');

ReactDOM.render((
    <AppContainer>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </AppContainer>
), rootEl);

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const App = require('./components/app');
    ReactDOM.render(<App/>, rootEl)
  });
}