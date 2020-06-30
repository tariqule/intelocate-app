import {combineReducers} from 'redux';
import userReducer from './user';
import {createReducer as createNetworkReducer} from 'react-native-offline';
import {comparisonFn} from '../reducers/offline//comparisonfn';
import reportIssue from '../reducers/offline';
import issueActon from '../reducers/issue-action';
export default combineReducers({
  userReducer,
  reportIssue,
  issueActon,
  network: createNetworkReducer(comparisonFn),
});
