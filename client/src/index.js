import 'react-bulma-components/dist/react-bulma-components.min.css';
import './style-sheets/App.scss';
import '../node_modules/font-awesome/css/font-awesome.css';

import React from 'react';

import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDom.render(
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);