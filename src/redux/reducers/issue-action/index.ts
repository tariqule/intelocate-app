import {OfflineQueue} from './../../../offline-queue/types';
import {
  CREATE_ACTION,
  CREATE_ACTION_OFFLINE_QUEUE,
  CLEAR_OFFLINE_QUEUE,
  ACTION_SUBMIT_RESPONSE,
} from '../../action/offline';
import {SELECTED_ACTION} from '../../action/issue-action';

const initialState = {
  selectedAction: [],
};

const issueActon = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_ACTION:
      console.log(
        JSON.stringify(state) +
          ' ===> From [redux] [reducer] [selected-action]',
      );
      return {
        ...state,
        selectedAction: action.payload,
      };

    default:
      return state;
  }
};
export default issueActon;
