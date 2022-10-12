import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, appluMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App'

const store = createStore(reducer, compose(appluMiddleware(thunk)));
ReactDom.render(<App />, document.getElementById('root'));