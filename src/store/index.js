/*
 * @Descripttion:redux状态管理
 * @Author: Calvin
 * @Date: 2021-09-13 15:23:08
 */

import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;
