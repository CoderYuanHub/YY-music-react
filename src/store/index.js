import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

// 浏览器插件用于处理store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用中间件,可以接收多个中间件
const applyThunkMiddleware = applyMiddleware(thunk);

// 创建store
const store = createStore(reducer, composeEnhancers(applyThunkMiddleware));


export default store;