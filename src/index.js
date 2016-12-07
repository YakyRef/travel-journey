import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import middleware from './middleware/middleware';
import reducers from './reducers';
import App from './components/App/App.js';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import InputPage from './components/InputPage';
import { syncHistoryWithStore ,routerMiddleware} from 'react-router-redux'
import './index.css';

let store = createStore(
    reducers,
    compose(applyMiddleware(middleware),
        applyMiddleware(routerMiddleware(browserHistory)),
        window.devToolsExtension ? window.devToolsExtension() : f => f)
);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={InputPage}/>
            <Route component={App} path="/account/:id"/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
