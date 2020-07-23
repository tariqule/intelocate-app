import {combineReducers} from 'redux';
import userReducer from './user';
import {createReducer as createNetworkReducer} from 'react-native-offline';
import {comparisonFn} from '../reducers/offline//comparisonfn';
import reportIssue from '../reducers/offline';
import issueActon from '../reducers/issue-action';
import actionStats from '../reducers/stats';
import taskReducer from './task';
export default combineReducers({
  userReducer,
  reportIssue,
  issueActon,
  actionStats,
  taskReducer,
  network: createNetworkReducer(comparisonFn),
});
