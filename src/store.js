import rootReducers from './reducers';
import { applyMiddleware, createStore } from 'redux';
import hookMiddleware, { registerPrehook } from 'redux-hook-middleware'

const middlewares = [hookMiddleware];
const configureStore = createStore(rootReducers, applyMiddleware(...middlewares));

export default configureStore;
