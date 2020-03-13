import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

const rootElement = document.querySelector('#root');
ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement,
);
