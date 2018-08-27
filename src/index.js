/**
 * 项目的主入口文件
 */
import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
let store = createStore(reducers);

render(
    <Provider store = {store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
