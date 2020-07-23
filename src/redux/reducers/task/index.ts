import {
  SET_ACTUAL_DATA,
  SET_ACTUAL_INVOICE,
  SET_ORGANIZATION,
} from '../../action/task/types';

const initialState = {
  actualData: [],
  actualInvoices: [],
  organization: [],
};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTUAL_DATA:
      return {...state, actualData: action.payload};
    case SET_ACTUAL_INVOICE:
      return {...state, actualInvoices: action.payload};
    case SET_ORGANIZATION:
      return {...state, organization: action.payload};
    default:
      return state;
  }
};
export default taskReducer;
