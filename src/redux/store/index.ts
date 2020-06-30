import {report_issue_fn} from './../action/offline/index';
import {networkTransform} from './network-transform';
import {AsyncStorage} from 'react-native';
// import { billTimerMiddleware } from "../middleware/billTimer";
import rootReducer from '../reducers/';
import thunk from 'redux-thunk';
import {applyMiddleware, createStore, compose} from 'redux';
import {
  createNetworkMiddleware,
  offlineActionCreators,
  checkInternetConnection,
} from 'react-native-offline';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import SetTransform from './transform';
// defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  transforms: [networkTransform],
};

const networkMiddleware = createNetworkMiddleware();

// import { createEpicMiddleware } from "redux-observable";

export const sagaMiddleware = createSagaMiddleware();
// export const epicMiddleware = createEpicMiddleware();

let middleware = [thunk, sagaMiddleware, networkMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middleware)),
  );
  let persistor = persistStore(store);

  const {connectionChange} = offlineActionCreators;
  // https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
  persistStore(store, null, () => {
    // After rehydration completes, we detect initial connection
    checkInternetConnection().then((isConnected) => {
      console.log(isConnected + '[store]');
      store.dispatch(connectionChange(isConnected));

      // Notify our root component we are good to go, so that we can render our app
    });
  });

  return {store, persistor};
};
// export function store(callback) {
//   const store = createStore(rootReducer, applyMiddleware(...middleware));
//   const {connectionChange} = offlineActionCreators;
//   // https://github.com/rt2zz/redux-persist#persiststorestore-config-callback
//   persistStore(store, null, () => {
//     // After rehydration completes, we detect initial connection
//     checkInternetConnection().then((isConnected) => {
//       store.dispatch(connectionChange(isConnected));
//       callback(); // Notify our root component we are good to go, so that we can render our app
//     });
//   });

//   return store;
// }
