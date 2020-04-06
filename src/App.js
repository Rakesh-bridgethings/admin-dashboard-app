import React, { Fragment } from 'react';
import './App.css';
import './assets/base.css';
import './assets/style.css';
import Route from './config/route';
import store from './store';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
// import { applyMiddleware, createStore } from 'redux';

function App () {
    // const configureStore = createStore(rootReducers);
    return (
        <Provider store={store}>
        <Route />
        </Provider>
    );
}

export default App;
