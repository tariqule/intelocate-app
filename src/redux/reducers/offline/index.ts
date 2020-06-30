import {
  CREATE_ACTION,
  CREATE_ACTION_OFFLINE_QUEUE,
  CLEAR_OFFLINE_QUEUE,
  ACTION_SUBMIT_RESPONSE,
  OFFLINE_ACTION_LIST,
  OFFLINE_CATEGORY_LIST,
  OFFLINE_SUB_CATEGORY_LIST,
  OFFLINE_ORGANIZATION_LIST,
  OFFLINE_ORGANIZATION_LOCATION,
} from '../../action/offline';

const initialState = {
  offlineData: [],
  responseData: [],
  offlineAllActionList: [],
  offlineCategories: [],
  offlineSubCategories: [],
  offlineOrganizationList: [],
  offlineOrganizationLocationList: [],
};

const reportIssue = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACTION_OFFLINE_QUEUE:
      console.log(JSON.stringify(state) + ' ===> From [redux] [reducer]');
      return {
        ...state,
        offlineData: action.payload,
      };

    case CLEAR_OFFLINE_QUEUE:
      console.log('Clearing storage..');
      return {...state, offlineData: []};
    case ACTION_SUBMIT_RESPONSE:
      console.log(
        JSON.stringify(state) + ' ===> Reaponse From [redux] [reducer]',
      );
      return {
        ...state,
        responseData: action.payload,
      };
    case OFFLINE_ACTION_LIST:
      return {
        ...state,
        offlineAllActionList: action.payload,
      };
    case OFFLINE_CATEGORY_LIST:
      return {
        ...state,
        offlineCategories: action.payload,
      };
    case OFFLINE_SUB_CATEGORY_LIST:
      return {
        ...state,
        offlineSubCategories: action.payload,
      };
    case OFFLINE_ORGANIZATION_LIST:
      return {
        ...state,
        offlineOrganizationList: action.payload,
      };
    case OFFLINE_ORGANIZATION_LOCATION:
      return {
        ...state,
        offlineOrganizationLocationList: action.payload,
      };

    default:
      return state;
  }
};
export default reportIssue;
