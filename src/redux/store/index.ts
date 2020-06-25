// import { billTimerMiddleware } from "../middleware/billTimer";
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from 'redux';
// import { createEpicMiddleware } from "redux-observable";
import createSagaMiddleware from 'redux-saga';

export const sagaMiddleware = createSagaMiddleware();
// export const epicMiddleware = createEpicMiddleware();

let middlewares = [thunk, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
